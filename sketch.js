/////////////////////// Global Variables ///////////////////////

let music;
let scene = 1; // start on scene 1
let imgScene1 = [];
let imgIndex1 = 0;
let frameCounterScene1 = 0;
// ---------- Scene 2 (Intro chat) ----------
let dialog = [
  "Everyone hides behind a mask.",
  "Whether to show the world the polished version of yourself or to conceal the sorrow that drifts beneath their skin",
  "… or perhaps something much more sinister.",
  "So… shall we strip away the mask?"
];
let currentLine = 0;
let charIndex = 0;
let typingSpeed = 3;
let frameCounter = 0;

let imgScene2 = [];
let imgIndex2 = 0;
let frameCounterScene2 = 0;

// Quiz images
let quizImgs = [];

// Quiz variables
let questions = [
  {
    q: "How do you usually end an argument?",
    answers: [
      "A. By apologizing, even if I don’t mean it.",
      "B. By going quiet and letting it fade.",
      "C. By staying calm until they slip up.",
      "D. By choosing silence that unsettles them."
    ]
  },
  {
    q: "When you lose something important, how do you respond?",
    answers: [
      "A. I blame myself for not holding on tighter.",
      "B. I let them slip through hints, hoping someone notices.",
      "C. I measure which ones are useful before sharing.",
      "D. I carry them easily — secrets don’t weigh on me."
    ]
  },
  {
    q: "How do you usually handle secrets?",
    answers: [
      "A. I keep them inside until they eat at me.",
      "B. I share them with a trusted friend.",
      "C. I forget about them.",
      "D. I use them to my advantage."
    ]
  },
  {
    q: "When you think about your past, what stands out most?",
    answers: [
      "A. The mistakes I wish I could undo.",
      "B. The times I felt invisible.",
      "C. The patterns I’ve learned to recognize in people.",
      "D. How quickly others forget what really happened."
    ]
  },
  {
    q: "How do you feel about trust?",
    answers: [
      "A. I want to give it, but I’m afraid.",
      "B. I give it too easily and regret it later.",
      "C. I give it carefully — only when it serves me.",
      "D. I don’t need it; distance feels safer."
    ]
  },
  {
    q: "If someone betrayed you, your instinct would be…",
    answers: [
      "A. To blame myself.",
      "B. To withdraw completely.",
      "C. To file it away — useful information later.",
      "D. To act like nothing happened, until the time is right."
    ]
  },
  {
    q: "How do you view empathy?",
    answers: [
      "A. Something I crave but don’t receive.",
      "B. Something I give too much of, leaving me empty.",
      "C. Something I can imitate when needed.",
      "D. Something I understand more with my head than my heart."
    ]
  },
  {
    q: "Which thought feels closest to you on bad days?",
    answers: [
      "A. How much longer I can keep pretending.",
      "B. Maybe it wouldn’t matter if I disappeared.",
      "C. Everyone wears masks — I’m just better at mine.",
      "D. I don’t feel bad; I feel… nothing."
    ]
  },
  {
    q: "When someone asks how you are, your first instinct is…",
    answers: [
      "A. “I’m fine”, even if I’m not.",
      "B. To deflect and ask about them instead.",
      "C. Give a vague answer and watch their reaction.",
      "D. Tell the truth, but only the parts that benefit me."
    ]
  },
  {
    q: "When you see someone crying, your first reaction is…?",
    answers: [
      "A. Wanting to comfort them, but not knowing how.",
      "B. Looking away — it’s uncomfortable.",
      "C. Observing quietly.",
      "D. Staying calm — emotions don’t strongly affect me."
    ]
  },
  {
    q: "If you could drop your mask for a day, what would happen?",
    answers: [
      "A. People would see how exhausted I am.",
      "B. I’d feel vulnerable and exposed.",
      "C. Some would finally see how calculating I really am.",
      "D. Nothing — my mask is too close to my real face now."
    ]
  }
];

let currentQ = 0;
let scoreAB = 0;
let scoreCD = 0;

// ---------- Scene 4 dialog ----------
let dialog4 = [
  "Beneath the flawless façade, you carried a heavy weight.",
  "A quiet, constant sorrow hidden beneath practiced smiles",
  "But hear you are not broken. You are enduring. You are still here, and that is its own kind of courage. Whatever you carry, you do not have to do it alone."
];
let currentLine4 = 0;
let charIndex4 = 0;
let frameCounter4 = 0;
// scene 4 images
let imgScene4Set = [];
let imgIndex4 = 0;
let frameCounterScene4 = 0;


// ---------- Scene 5 dialog ----------
let dialog5 = [
  "The mask does not hide sadness, nor silence. It hides a mind sharp as blades — cutting, precise, unrelenting. Others smile at you, never sensing the edge pressed against their throat.",
  "Smiles are your weapons, words your traps.",
  "The people around you are puppets whose strings you pull, yet they are none the wiser."
];
let currentLine5 = 0;
let charIndex5 = 0;
let frameCounter5 = 0;

// Images

let imgScene5Set = [];
let imgIndex5 = 0;
let frameCounterScene5 = 0;
/////////////////////// Preload ///////////////////////
function preload() {
  // scene 1 image
  imgScene1[0] = loadImage("images/1.png");
  imgScene1[1] = loadImage("images/2.png");
  imgScene1[2] = loadImage("images/3.png");
  // quiz images
  for (let i = 0; i < 6; i++) {
    quizImgs[i] = loadImage("images/M" + (i + 1) + ".png");
  }

  imgScene4 = loadImage("images/Ending1.png");
  imgScene5 = loadImage("images/Ending2.png");

  //scene 2 images
  imgScene2[0] = loadImage("images/Group1.png");
  imgScene2[1] = loadImage("images/Group2.png");
  imgScene2[2] = loadImage("images/Group3.png");

  // scene 4 images
  imgScene4Set[0] = loadImage("images/Ending1.png");
  imgScene4Set[1] = loadImage("images/Ending1.2.png");
  imgScene4Set[2] = loadImage("images/Ending1.3.png");
  // scene 5 images
  imgScene5Set[0] = loadImage("images/Ending2.png");
  imgScene5Set[1] = loadImage("images/Ending2.2.png");
  imgScene5Set[2] = loadImage("images/Ending2.3.png");

}

/////////////////////// Setup ///////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Gloria Hallelujah");
  textSize(width * 0.015);
}

music = document.getElementById("music");
music.volume = 0.2;

/////////////////////// Draw ///////////////////////
function draw() {
  background(15);

  if (scene === 1) {
    frameCounterScene1++;

    if (frameCounterScene1 % 24 === 0) {
      imgIndex1 = (imgIndex1 + 1) % imgScene1.length;
    }

    imageMode(CENTER);
    image(imgScene1[imgIndex1], width / 2, height / 2, width, height);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(86);
    text("Behind the mask", width / 2, height / 2 - 100);

    textSize(18);
    text("[Click anywhere to begin]", width / 2, height / 2);


  } else if (scene === 2) {
    frameCounter++;
    frameCounterScene2++;


    if (frameCounterScene2 % 24 === 0) {
      imgIndex2 = (imgIndex2 + 1) % imgScene2.length;
    }

    // draw current image
    imageMode(CENTER);
    image(imgScene2[imgIndex2], width / 2, height / 2, width, height);

    drawChatBox();

  } else if (scene === 3) {
    drawQuiz();

  } else if (scene === 4) {
    frameCounterScene4++;

    if (frameCounterScene4 % 24 === 0) {
      imgIndex4 = (imgIndex4 + 1) % imgScene4Set.length;
    }

    imageMode(CENTER);
    image(imgScene4Set[imgIndex4], width / 2, height / 2, width, height);

    frameCounter4++;
    if (frameCounter4 % typingSpeed === 0 && charIndex4 < dialog4[currentLine4].length) {
      charIndex4++;
    }
    drawChatBoxScene4();
    function drawChatBoxScene4() {
      let line = dialog4[currentLine4].substring(0, charIndex4);
      drawChatUI(line);
    }

  } else if (scene === 5) {
    frameCounterScene5++;

    if (frameCounterScene5 % 24 === 0) {
      imgIndex5 = (imgIndex5 + 1) % imgScene5Set.length;
    }

    imageMode(CENTER);
    image(imgScene5Set[imgIndex5], width / 2, height / 2, width, height);


    frameCounter5++;
    if (frameCounter5 % typingSpeed === 0 && charIndex5 < dialog5[currentLine5].length) {
      charIndex5++;
    }
    drawChatBoxScene5();


    function drawChatBoxScene5() {
      let line = dialog5[currentLine5].substring(0, charIndex5);
      drawChatUI(line);
    }

  } else if (scene === 6) {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("You have completed the quiz.", width / 2, height / 2 - 40);
    textSize(20);
    text("Click to reveal your result...", width / 2, height / 2 + 20);
  }
}

/////////////////////// Mouse Handling ///////////////////////
function mousePressed() {
  if (scene === 1) {
    // start the music here on first user click
    if (music.paused) {
      music.play();
    }

    scene = 2;

  } else if (scene === 2) {
    if (charIndex >= dialog[currentLine].length) {
      if (currentLine < dialog.length - 1) {
        currentLine++;
        charIndex = 0;
      } else {
        scene = 3;
      }
    } else {
      charIndex = dialog[currentLine].length;
    }

  } else if (scene === 3) {
    checkQuizClick();

  } else if (scene === 4) {
    if (charIndex4 >= dialog4[currentLine4].length) {
      if (currentLine4 < dialog4.length - 1) {
        currentLine4++;
        charIndex4 = 0;
      }
    } else {
      charIndex4 = dialog4[currentLine4].length;
    }

  } else if (scene === 5) {
    if (charIndex5 >= dialog5[currentLine5].length) {
      if (currentLine5 < dialog5.length - 1) {
        currentLine5++;
        charIndex5 = 0;
      }
    } else {
      charIndex5 = dialog5[currentLine5].length;
    }

  } else if (scene === 6) {
    if (scoreAB >= scoreCD) {
      scene = 4;
    } else {
      scene = 5;
    }
  }
}

/////////////////////// Quiz ///////////////////////

function drawQuiz() {
  let q = questions[currentQ];
  let margin = 20;

  // --- background image ---
  let imgIndex = Math.floor(currentQ / 2); // change every 2 questions
  if (imgIndex > 5) imgIndex = 5; // clamp to last image (M6)

  imageMode(CENTER);
  image(quizImgs[imgIndex], width / 2, height / 2, width, height);

  // --- Measure question text height dynamically ---
  textSize(18);
  textAlign(LEFT, TOP);
  let questionW = width - 100 - margin * 2;
  let questionH = textBoundsHeight(q.q, questionW);

  // --- Box dimensions (question + answers) ---
  let btnH = 50;
  let gridRows = 2;
  let spacing = 15;
  let boxH = questionH + margin * 3 + gridRows * btnH + spacing; // auto height
  let boxW = width - 100;
  let boxX = 50;
  let boxY = height - boxH - 10;

  // --- Draw outer box ---
  stroke(255);
  strokeWeight(2);
  fill(0);
  rect(boxX, boxY, boxW, boxH, 5);

  // --- Draw question text ---
  fill(255);
  noStroke();
  textSize(24);
  text(q.q, boxX + margin, boxY + margin, questionW, questionH);

  // --- Answer buttons (2x2 grid) ---
  textSize(20);
  let btnW = (boxW - margin * 3) / 2; // two columns
  let startY = boxY + margin + questionH + margin;

  for (let i = 0; i < 4; i++) {
    let col = i % 2;
    let row = Math.floor(i / 2);
    let x = boxX + margin + col * (btnW + margin);
    let y = startY + row * (btnH + spacing);

    // Button outline
    stroke(255);
    noFill();
    rect(x, y, btnW, btnH, 5);

    // Button text
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    text(q.answers[i], x + 10, y + btnH / 2);

    // Hover effect
    if (
      mouseX > x && mouseX < x + btnW &&
      mouseY > y && mouseY < y + btnH
    ) {
      noFill();
      stroke(0, 255, 0);
      rect(x, y, btnW, btnH, 5);
    }
  }
}

// --- Helper: estimate text height for wrapping ---
function textBoundsHeight(str, w) {
  let words = str.split(" ");
  let line = "";
  let h = 0;

  for (let i = 0; i < words.length; i++) {
    let testLine = line + words[i] + " ";
    let testW = textWidth(testLine);
    if (testW > w && i > 0) {
      h += textAscent() + textDescent();
      line = words[i] + " ";
    } else {
      line = testLine;
    }
  }
  h += textAscent() + textDescent();
  return h;
}

// --- Handle answer selection ---
function handleAnswer(i) {
  // Count A/B vs C/D
  if (i === 0 || i === 1) {
    scoreAB++;
  } else {
    scoreCD++;
  }

  // Next question or end quiz
  if (currentQ < questions.length - 1) {
    currentQ++;
  } else {
    scene = 6; // go to results scene after finishing all questions
  }
}
function checkQuizClick() {
  let q = questions[currentQ];
  let margin = 20;

  // Match the same layout math as drawQuiz()
  let questionW = width - 100 - margin * 2;
  let questionH = textBoundsHeight(q.q, questionW);

  let btnH = 50;
  let spacing = 15;
  let boxW = width - 100;
  let boxX = 50;
  let boxY = height - (questionH + margin * 3 + 2 * btnH + spacing) - 10;

  let btnW = (boxW - margin * 3) / 2;
  let startY = boxY + margin + questionH + margin;

  // Loop through 4 buttons
  for (let i = 0; i < 4; i++) {
    let col = i % 2;
    let row = Math.floor(i / 2);
    let x = boxX + margin + col * (btnW + margin);
    let y = startY + row * (btnH + spacing);

    if (
      mouseX > x && mouseX < x + btnW &&
      mouseY > y && mouseY < y + btnH
    ) {
      handleAnswer(i); // choose this answer
      break;
    }
  }
}


/////////////////////// Chatboxes ///////////////////////
function drawChatBox() {
  let boxH = 150;
  let boxW = width - 200;
  let boxX = (width - boxW) / 2;
  let boxY = height - boxH - 20;

  stroke(255);
  strokeWeight(3);
  fill(0, 200);
  rect(boxX, boxY, boxW, boxH, 10);

  if (frameCounter % typingSpeed === 0 && charIndex < dialog[currentLine].length) {
    charIndex++;
  }

  fill(255);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(24);
  let margin = 20;
  let visibleText = dialog[currentLine].substring(0, charIndex);
  text(visibleText, boxX + margin, boxY + margin, boxW - 2 * margin, boxH - 2 * margin);
}

function drawChatBoxScene4() {
  imageMode(CENTER);
  image(imgScene4, width / 2, height / 2, width, height);

  let line = dialog4[currentLine4].substring(0, charIndex4);
  drawChatUI(line);
}

function drawChatBoxScene5() {
  imageMode(CENTER);
  image(imgScene5, width / 2, height / 2, width, height);

  let line = dialog5[currentLine5].substring(0, charIndex5);
  drawChatUI(line);
}

function drawChatUI(textLine) {
  let boxW = width - 150;
  let boxH = 120;
  let boxX = (width - boxW) / 2;
  let boxY = height - boxH - 20;

  stroke(255);
  strokeWeight(3);
  fill(0);
  rect(boxX, boxY, boxW, boxH, 10);

  noStroke();
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  text(textLine, boxX + 20, boxY + 20, boxW - 40, boxH - 40);
}
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
