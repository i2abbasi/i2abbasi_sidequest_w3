// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// This file:
// A) stores the current screen in a shared variable
// B) calls the correct draw function each frame
// C) routes mouse + keyboard input to the active screen

// ------------------------------
// Global game state
// ------------------------------
let currentScreen = "start";
// possible values:
// "start" | "instr" | "game" | "win" | "lose"

// ------------------------------
// setup() runs once
// ------------------------------
function setup() {
  createCanvas(800, 800);
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame
// ------------------------------
function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "game") drawGame();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();
}

// ------------------------------
// mousePressed() → route mouse input
// ------------------------------
function mousePressed() {
  if (currentScreen === "start") {
    // reset story state for a new playthrough
    trust = 0;
    storyState = "intro";
    startMousePressed();
  } else if (currentScreen === "instr") {
    instrMousePressed();
  } else if (currentScreen === "game") {
    gameMousePressed();
  } else if (currentScreen === "win") {
    winMousePressed?.();
  } else if (currentScreen === "lose") {
    loseMousePressed?.();
  }
}

// ------------------------------
// keyPressed() → route keyboard input
// ------------------------------
function keyPressed() {
  if (currentScreen === "start") {
    // reset story state for a new playthrough
    trust = 0;
    storyState = "intro";
    startKeyPressed();
  } else if (currentScreen === "instr") {
    instrKeyPressed();
  } else if (currentScreen === "game") {
    gameKeyPressed?.();
  } else if (currentScreen === "win") {
    winKeyPressed?.();
  } else if (currentScreen === "lose") {
    loseKeyPressed?.();
  }
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
// Checks if the mouse is inside a rect drawn with rectMode(CENTER)
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
