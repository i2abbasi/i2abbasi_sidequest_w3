// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js

// ------------------------------
// Story + player data
// ------------------------------
let trust = 0; // player stat that persists across scenes

let storyState = "intro";
// possible states:
// "intro" → start of story
// "help" → player chooses to help
// "ignore" → player ignores
// later: "goodEnding", "badEnding"

// ------------------------------
// Button data (two buttons now)
// ------------------------------
const helpBtn = {
  x: 280,
  y: 520,
  w: 240,
  h: 80,
  label: "HELP THEM",
};

const ignoreBtn = {
  x: 520,
  y: 520,
  w: 240,
  h: 80,
  label: "IGNORE THEM",
};

// ------------------------------
// Main draw function
// ------------------------------
function drawGame() {
  background(240, 230, 140);
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(32);
  text("An Unexpected Choice", width / 2, 120);

  textSize(18);

  if (storyState === "intro") {
    text(
      "You see a stranger struggling on the side of the road.\nThey look nervous. They notice you.",
      width / 2,
      230,
    );

    drawGameButton(helpBtn);
    drawGameButton(ignoreBtn);
  }

  if (storyState === "help") {
    text(
      "You stop to help them.\nThey seem relieved.\n\nTrust increased.",
      width / 2,
      250,
    );

    textSize(16);
    text("Press ENTER to continue.", width / 2, 340);
  }

  if (storyState === "ignore") {
    text(
      "You walk past without stopping.\nThey watch you leave.\n\nTrust decreased.",
      width / 2,
      250,
    );

    textSize(16);
    text("Press ENTER to continue.", width / 2, 340);
  }

  // show stat on screen
  textSize(16);
  textAlign(LEFT, TOP);
  text("Trust: " + trust, 20, 20);

  // cursor feedback
  cursor(isHover(helpBtn) || isHover(ignoreBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(180, 220, 255, 220) : color(200, 220, 255, 190));

  rect(x, y, w, h, 14);

  fill(0);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input
// ------------------------------
function gameMousePressed() {
  if (storyState === "intro") {
    if (isHover(helpBtn)) {
      trust += 1;
      storyState = "help";
    }

    if (isHover(ignoreBtn)) {
      trust -= 1;
      storyState = "ignore";
    }
  }
}

// ------------------------------
// Keyboard input
// ------------------------------
function gameKeyPressed() {
  if (keyCode === ENTER) {
    advanceStory();
  }
}

// ------------------------------
// Story progression logic
// ------------------------------
function advanceStory() {
  // after first decision, branch endings
  if (storyState === "help" || storyState === "ignore") {
    if (trust >= 1) {
      currentScreen = "win"; // good ending
    } else {
      currentScreen = "lose"; // bad ending
    }
  }
}
