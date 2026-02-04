// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
function drawLose() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("Bad Ending", width / 2, 240);

  textSize(22);

  // Ending text changes based on Trust stat
  if (trust < 0) {
    text(
      "You ignored others when they needed help.\n" +
        "When you needed someone, no one was there.",
      width / 2,
      320,
    );
  } else {
    text(
      "Your choices led to an unfortunate outcome.\n" +
        "Some chances do not come twice.",
      width / 2,
      320,
    );
  }

  textSize(18);
  text("Click or press R to return to Start.", width / 2, 400);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
