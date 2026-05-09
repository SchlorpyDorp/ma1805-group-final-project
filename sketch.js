let painWindows = [];
let brokenFiles = [];

let score = 0;
let recoveryScore = 0;

let spawnTimer = 0;
let spawnSpeed = 100;

let recoveryTime = 6.7;
let recoveryStartMillis = 0;

let startScreen = true;
let gameOver = false;
let recoveryMode = false;
let finalScreen = false;
let recoveryFailed = false;

/* Just a big list of stupid popup messages. This is probably my favourite bit honestly */
let popupNonsense = [
  "Your PC is tired.",
  "Update failed successfully.",
  "You've just won a virus!",
  "RAM has left the chat.",
  "Internet Explorer is back.",
  "System32 looks nervous.",
  "Your cursor is judging you.",
  "Download more patience.",
  "I'm hungry, you hungry?.",
  "This is fine.",
  "Error: no error found.",
  "Windows needs emotional support.",
  "Your files look suspiciously calm.",
  "The recycle bin is plotting.",
  "Keyboard detected breathing.",
  "Mouse moved without permission.",
  "Please insert common sense.",
  "CPU has requested annual leave.",
  "Your desktop feels crowded.",
  "Antivirus found bad vibes.",
  "WiFi is thinking about it.",
  "Loading... spiritually.",
  "Hard drive making life choices.",
  "OneDrive has entered the room.",
  "Your tabs have unionised.",
  "Suspicious rectangle detected.",
  "Printer ate the paper again.",
  "Bluetooth has disappeared.",
  "Your settings have other opinions.",
  "Click OK to regret.",
  "The cloud is judging you.",
  "Unknown thing did a thing.",
  "Task failed with confidence.",
  "Your GPU wants a raise.",
  "Temporary file became permanent.",
  "Something went slightly sideways.",
  "This window pays rent now.",
  "A popup has spawned emotionally.",
  "Digital clutter detected.",
  "Congratulations, more problems.",
  "The algorithm is hungry.",
  "Please stop clicking things.",
  "Your cache is full of shame.",
  "Screen too peaceful. Fixed it.",
  "Notification goblin activated.",
  "Desktop morale is low.",
  "Installing disappointment...",
  "Permission denied by vibes.",
  "User detected. Unfortunate.",
  "Your PC misses Windows XP.",
  "System panic, but politely.",
  "Background process got bored."
];

function setup() {
  createCanvas(600, 600);
  textFont("monospace");
}

function draw() {
  drawDesktop();

  /* This checks what screen the game SHOULD currently show */
  /* I used separate booleans because it made more sense to me than one massive state variable */
  if (startScreen) {
    drawStartScreen();
  } else if (finalScreen) {
    drawFinalScreen();
  } else if (recoveryFailed) {
    drawRecoveryFailedScreen();
  } else if (recoveryMode) {
    playRecoveryPart();
  } else if (gameOver) {
    drawGameOver();
  } else {
    playPopupPart();
  }
}

function playPopupPart() {
  spawnTimer++;

  /* makes the windows come in faster the longer you survive */
  /* Basically, the longer you survive, the more the computer decides to ruin your day */
  if (spawnTimer > spawnSpeed) {
    makePainWindow();
    spawnTimer = 0;

    if (spawnSpeed > 25) {
      spawnSpeed = spawnSpeed - 2;
    }
  }

  drawPainWindows();
  drawScoreBox();

  /* 12 felt like enough to clutter the screen without making it instantly impossible */
  if (painWindows.length >= 12) {
    gameOver = true;
  }
}

function playRecoveryPart() {
  drawBrokenFiles();
  drawRecoveryUI();

  /* Timer uses millis so it can show decimals */
  /* Also purely for a 67 joke because I'm 18 and want to make the most of being young */
  let timeUsed = (millis() - recoveryStartMillis) / 1000;
  let timeLeft = recoveryTime - timeUsed;

  if (timeLeft <= 0 && brokenFiles.length > 0) {
    recoveryMode = false;
    recoveryFailed = true;
  }

  if (brokenFiles.length === 0) {
    recoveryMode = false;
    finalScreen = true;
  }
}

function drawDesktop() {
  background(40, 105, 150);

  /* Basic desktop icons for some of that windows pizazz, because surely accuracy boosts my grade */
  drawIcon(35, 35, "Bin");
  drawIcon(35, 115, "Work");
  drawIcon(35, 195, "Stuff");

  /* Taskbar at the bottom since it's windows afterall */
  stroke(20);
  fill(35, 35, 45);
  rect(0, 560, width, 40);

  stroke(20);
  fill(70, 130, 190);
  rect(8, 566, 80, 28, 3);

  noStroke();
  fill(255);
  textSize(14);
  text("Start", 28, 585);

  fill(220);
  textSize(12);
  text("Pop-Up Panic.exe", 110, 585);

  /* Static time because making a real clock felt pointless for this (I'm lazy.) */
  text("12:04", 540, 585);
}

function drawIcon(x, y, label) {
  /* Little fake desktop icon. Not exactly beautiful, but it does the job */
  stroke(40);
  fill(230);
  rect(x, y, 35, 35, 4);

  stroke(80);
  fill(180, 210, 255);
  rect(x + 6, y + 7, 23, 18);

  noStroke();
  fill(255);
  textSize(11);
  textAlign(CENTER);
  text(label, x + 17, y + 52);
  textAlign(LEFT);
}

function drawStartScreen() {
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  stroke(40);
  fill(245);
  rect(120, 160, 360, 260);

  noStroke();
  fill(20, 80, 150);
  rect(120, 160, 360, 35);

  fill(255);
  textSize(18);
  text("Pop-Up Panic", 135, 184);

  fill(30);
  textSize(15);
  text("Close the popups before", 150, 235);
  text("the desktop becomes unusable.", 150, 260);

  textSize(13);
  text("Click the red X on each window.", 150, 300);
  text("If the system overloads,", 150, 325);
  text("you will need to recover it.", 150, 345);

  stroke(40);
  fill(70, 130, 190);
  rect(220, 370, 160, 38, 5);

  noStroke();
  fill(255);
  textSize(14);
  text("Click to Start", 250, 394);
}

function makePainWindow() {
  let popupW = random(260, 330);
  let popupH = random(90, 145);

  /* the windows are wide because short ones made the text run out the box */
  let popup = {
    x: random(40, width - popupW - 20),
    y: random(50, height - popupH - 70),
    w: popupW,
    h: popupH,
    message: random(popupNonsense)
  };

  painWindows.push(popup);
}

function drawPainWindows() {
  for (let i = 0; i < painWindows.length; i++) {
    let p = painWindows[i];

    stroke(40);
    fill(235);
    rect(p.x, p.y, p.w, p.h);

    noStroke();
    fill(25, 75, 160);
    rect(p.x, p.y, p.w, 25);

    fill(255);
    textSize(12);
    text("System Message", p.x + 8, p.y + 17);

    /* tiny red square of false hope */
    stroke(40);
    fill(200, 20, 30);
    rect(p.x + p.w - 25, p.y + 4, 18, 17);

    noStroke();
    fill(255);
    textSize(13);
    text("X", p.x + p.w - 20, p.y + 17);

    fill(30);
    textSize(13);
    text(p.message, p.x + 14, p.y + 55);

    /* Fake OK button, because fake choices are still choices. Some first year DMCT student wisdom right there for you */
    stroke(100);
    fill(210);
    rect(p.x + p.w / 2 - 30, p.y + p.h - 30, 60, 20);

    noStroke();
    fill(30);
    textSize(11);
    text("OK", p.x + p.w / 2 - 8, p.y + p.h - 16);
  }
}

function drawScoreBox() {
  stroke(20);
  fill(0, 0, 0, 130);
  rect(390, 10, 195, 55, 6);

  noStroke();
  fill(255);
  textSize(15);
  text("Score: " + score, 410, 32);
  text("Open windows: " + painWindows.length + "/12", 410, 52);
}

function drawGameOver() {
  /* Keeps the mess visible behind the game over box, which looks more chaotic */
  drawPainWindows();

  noStroke();
  fill(0, 0, 0, 170);
  rect(0, 0, width, height);

  stroke(40);
  fill(245);
  rect(120, 160, 360, 260);

  noStroke();
  fill(140, 0, 0);
  rect(120, 160, 360, 35);

  fill(255);
  textSize(17);
  text("Desktop Overloaded", 140, 184);

  fill(30);
  textSize(15);
  text("Too many windows opened.", 155, 235);
  text("Pop-up score: " + score, 155, 265);

  textSize(13);
  text("The system now needs recovery.", 155, 300);
  text("Repair all broken files before", 155, 325);
  text("the timer runs out.", 155, 345);

  stroke(40);
  fill(70, 130, 190);
  rect(215, 370, 170, 38, 5);

  noStroke();
  fill(255);
  textSize(14);
  text("Start Recovery", 242, 394);
}

function createBrokenFiles() {
  brokenFiles = [];

  /* The broken files are placed manually to keep it niiiiicceee and simple :) */
  /* I tried to space them out so they are clickeable but still a bit stressful */
  let file1 = { x: 130, y: 75, label: "bad.exe" };
  let file2 = { x: 230, y: 80, label: "junk.tmp" };
  let file3 = { x: 340, y: 70, label: "virus.txt" };
  let file4 = { x: 460, y: 90, label: "worm.bin" };

  let file5 = { x: 120, y: 200, label: "error.log" };
  let file6 = { x: 245, y: 210, label: "crash.bin" };
  let file7 = { x: 375, y: 205, label: "oops.dll" };
  let file8 = { x: 480, y: 225, label: "spam.dat" };

  let file9 = { x: 145, y: 350, label: "why.sys" };
  let file10 = { x: 275, y: 345, label: "mess.zip" };
  let file11 = { x: 410, y: 350, label: "lag.tmp" };
  let file12 = { x: 500, y: 375, label: "nope.bat" };

  brokenFiles.push(file1);
  brokenFiles.push(file2);
  brokenFiles.push(file3);
  brokenFiles.push(file4);
  brokenFiles.push(file5);
  brokenFiles.push(file6);
  brokenFiles.push(file7);
  brokenFiles.push(file8);
  brokenFiles.push(file9);
  brokenFiles.push(file10);
  brokenFiles.push(file11);
  brokenFiles.push(file12);
}

function drawBrokenFiles() {
  for (let i = 0; i < brokenFiles.length; i++) {
    let f = brokenFiles[i];

    stroke(40);
    fill(245);
    rect(f.x, f.y, 38, 46);

    fill(210);
    rect(f.x + 25, f.y, 13, 13);

    fill(210, 30, 30);
    rect(f.x + 8, f.y + 17, 22, 18);

    noStroke();
    fill(255);
    textSize(15);
    text("!", f.x + 16, f.y + 32);

    fill(255);
    textSize(11);
    textAlign(CENTER);
    text(f.label, f.x + 19, f.y + 63);
    textAlign(LEFT);
  }
}



function drawRecoveryUI() {
  let timeUsed = (millis() - recoveryStartMillis) / 1000;
  let timeLeft = recoveryTime - timeUsed;

  if (timeLeft < 0) {
    timeLeft = 0;
  }

  stroke(20);
  fill(0, 0, 0, 130);
  rect(330, 10, 255, 90, 6);

  noStroke();
  fill(255);
  textSize(15);
  text("System Recovery", 350, 33);
  text("Files left: " + brokenFiles.length, 350, 55);

  /* update: I absolutely did set it to 6.7 seconds because deep down I'm still a child */
  text("Time left: " + timeLeft.toFixed(2), 350, 77);
}

function drawFinalScreen() {
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);

  stroke(40);
  fill(245);
  rect(120, 165, 360, 260);

  noStroke();
  fill(20, 120, 70);
  rect(120, 165, 360, 35);

  fill(255);
  textSize(18);
  text("System Restored", 140, 189);

  fill(30);
  textSize(15);
  text("The desktop has been cleaned.", 155, 240);
  text("Pop-up score: " + score, 155, 270);
  text("Files repaired: " + recoveryScore, 155, 300);

  textSize(13);
  text("Somehow, the computer lives.", 155, 335);
  text("Modern technology is terrifying, isn't it?", 155, 355);

  stroke(40);
  fill(70, 130, 190);
  rect(220, 380, 160, 38, 5);

  noStroke();
  fill(255);
  textSize(14);
  text("Play Again", 266, 404);
}

function drawRecoveryFailedScreen() {
  noStroke();
  fill(0, 0, 0, 170);
  rect(0, 0, width, height);

  stroke(40);
  fill(245);
  rect(120, 165, 360, 260);

  noStroke();
  fill(140, 0, 0);
  rect(120, 165, 360, 35);

  fill(255);
  textSize(18);
  text("Recovery Failed", 140, 189);

  fill(30);
  textSize(15);
  text("The timer ran out.", 155, 240);
  text("Files repaired: " + recoveryScore, 155, 270);
  text("Files left: " + brokenFiles.length, 155, 300);

  textSize(13);
  text("The system remains deeply cooked.", 155, 335);
  text("A tragic end for a rectangle machine.", 155, 355);

  /* You'll be clicking this try again button a lot I reckon */
  stroke(40);
  fill(70, 130, 190);
  rect(220, 380, 160, 38, 5);

  noStroke();
  fill(255);
  textSize(14);
  text("Try Again", 268, 404);
}

function mousePressed() {
  if (startScreen) {
    if (
      mouseX > 220 &&
      mouseX < 380 &&
      mouseY > 370 &&
      mouseY < 408
    ) {
      startScreen = false;
    }

    return;
  }

  if (finalScreen) {
    if (
      mouseX > 220 &&
      mouseX < 380 &&
      mouseY > 380 &&
      mouseY < 418
    ) {
      restartEverything();
    }

    return;
  }

  if (recoveryFailed) {
    if (
      mouseX > 220 &&
      mouseX < 380 &&
      mouseY > 380 &&
      mouseY < 418
    ) {
      restartEverything();
    }

    return;
  }

  if (recoveryMode) {
    /* Click a broken file to repair it with some computer magicary */
    /* Looping backwards makes removing stuff from the array less annoying */
    for (let i = brokenFiles.length - 1; i >= 0; i--) {
      let f = brokenFiles[i];

      if (
        mouseX > f.x &&
        mouseX < f.x + 38 &&
        mouseY > f.y &&
        mouseY < f.y + 46
      ) {
        brokenFiles.splice(i, 1);
        recoveryScore++;
        return;
      }
    }

    return;
  }

  if (gameOver) {
    if (
      mouseX > 215 &&
      mouseX < 385 &&
      mouseY > 370 &&
      mouseY < 408
    ) {
      painWindows = [];
      gameOver = false;
      recoveryMode = true;
      recoveryScore = 0;
      recoveryStartMillis = millis();
      createBrokenFiles();
    }

    return;
  }

  /* I go backwards through the array so the top window gets clicked before the ones behind it */
  for (let i = painWindows.length - 1; i >= 0; i--) {
    let p = painWindows[i];

    let closeX = p.x + p.w - 25;
    let closeY = p.y + 4;

    if (
      mouseX > closeX &&
      mouseX < closeX + 18 &&
      mouseY > closeY &&
      mouseY < closeY + 17
    ) {
      painWindows.splice(i, 1);
      score++;
      return;
    }
  }
}

function restartEverything() {
  /* Full reset so the game starts from the beginning again */
  painWindows = [];
  brokenFiles = [];

  score = 0;
  recoveryScore = 0;

  spawnTimer = 0;
  spawnSpeed = 100;

  recoveryStartMillis = 0;

  startScreen = true;
  gameOver = false;
  recoveryMode = false;
  finalScreen = false;
  recoveryFailed = false;
}

/* IT'S FINALLY OVER. */