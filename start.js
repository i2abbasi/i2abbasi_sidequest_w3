// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
function drawStart() {
  // Background colour for the start screen
  background(180, 225, 220);

  // ---- Title text ----
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("An Interactive Choice", width / 2, 170);

  // ---- Subtitle ----
  textSize(18);
  text("Your decisions shape the outcome.", width / 2, 215);

  // ---- Buttons (data only) ----
  const startBtn = {
    x: width / 2,
    y: 320,
    w: 240,
    h: 80,
    label: "START",
  };

  const instrBtn = {
    x: width / 2,
    y: 430,
    w: 240,
    h: 80,
    label: "INSTRUCTIONS",
  };

  drawButton(startBtn);
  drawButton(instrBtn);

  // ---- Cursor feedback ----
  const over = isHover(startBtn) || isHover(instrBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
function startMousePressed() {
  const startBtn = { x: width / 2, y: 320, w: 240, h: 80 };
  const instrBtn = { x: width / 2, y: 430, w: 240, h: 80 };

  if (isHover(startBtn)) {
    currentScreen = "game";
  } else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  rect(x, y, w, h, 14);

  drawingContext.shadowBlur = 0;

  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
