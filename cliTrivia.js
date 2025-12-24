let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    answer: 0
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string"],
    answer: 0
  },
  {
    question: "Which method converts JSON to a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"],
    answer: 0
  }
];

let score = 0;
let currentQuestion = 0;
let timeUp = false;
let gameTime = 30000;

alert("Welcome to the Trivia Game.\nYou have 30 seconds to answer the questions.");

setTimeout(function () {
  timeUp = true;
  endGame();
}, gameTime);
askQuestion();

function askQuestion() {
  if (timeUp || currentQuestion >= questions.length) {
    endGame();
    return;
  }

  let q = questions[currentQuestion];
  let optionsText = "";

  for (let i = 0; i < q.options.length; i++) {
    optionsText = optionsText + (i + 1) + ". " + q.options[i] + "\n";
  }

  let answer = prompt(
    q.question + "\n\n" + optionsText + "\nEnter your answer number:"
  );

  checkAnswer(answer);
};

function checkAnswer(answer) {
  let correct = questions[currentQuestion].answer + 1;

  if (Number(answer) === correct) {
    alert("Correct");
    score = score + 1;
  } else {
    alert("Incorrect");
  }

  currentQuestion = currentQuestion + 1;
  askQuestion();
};

function endGame() {
  alert("Game Over");

  alert(
    "Your score is " +
      score +
      " out of " +
      questions.length
  );

  console.log("Score:", score);
};



