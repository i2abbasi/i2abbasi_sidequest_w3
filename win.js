// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
function drawWin() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("Good Ending", width / 2, 240);

  textSize(22);

  // Ending text changes based on Trust stat
  if (trust > 0) {
    text(
      "Your choices built trust.\n" +
        "When it mattered most, others stood by you.",
      width / 2,
      320,
    );
  } else {
    text(
      "Despite the odds, things worked out.\n" +
        "Not every victory is perfect.",
      width / 2,
      320,
    );
  }

  textSize(18);
  text("Click or press R to return to Start.", width / 2, 400);
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
