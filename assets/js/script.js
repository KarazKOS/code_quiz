// Global Variables

var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var intro = document.querySelector("#intro");
var questionTitle = document.querySelector("#questionTitle");
var choice1Btn = document.querySelector("#choice1");
var choice2Btn = document.querySelector("#choice2");
var choice3Btn = document.querySelector("#choice3");
var choice4Btn = document.querySelector("#choice4");
var answerCheckEl = document.querySelector("#answerCheck");
var finalScoreEl = document.querySelector("#finalScore");
var scoreTextEl = document.querySelector("#scoreText");
var initialsEl = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var highScoreEl = document.querySelector("#highScore");

var secLeft = 75;

var time = 0;
var index = 0;
var startTimer = 0;
var score = 0;

var userChoice = "";
var scoreObj = {
  initials: "",
  score: 0,
};

var savedArray = JSON.parse(localStorage.getItem("highscore")) || [];

var questions = [
  {
    question: "What are the 3 fundamental languages of the web?",
    answers: [
      { text: "German, French, Mandarin" },
      { text: "HTML, CSS & JavaScript" },
      { text: "Piglatin, Gibberish, baby talk" },
      { text: "Robot, Physics, Calculus" },
    ],
    correct: "HTML, CSS & JavaScript",
  },
  {
    question: "Which of the following is commonly used to test your code?",
    answers: [
      { text: "console.log();", correct: true },
      { text: "window.location.reload()", correct: false },
      { text: "forEach()", correct: false },
      { text: "cout", correct: false },
    ],
  },
  {
    question: "What is the definition of pseudocoding?",
    answers: [
      {
        text:
          "A description of the system operations written in layman's terms",
      },
      { text: "Fake code designed to confuse hackers" },
      { text: "Website templates" },
      { text: "Bad Code" },
    ],
    correct: "A description of the system operations written in layman's terms",
  },
  {
    question: "Which of the following is the correct syntax for JQuery?",
    answers: ["#", "%", "@", "$"],
    a: "$",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { text: "alertBox('Hello World');" },
      { text: "msg('Hello World');" },
      { text: "msgBox('Hello World');" },
      { text: "alert('Hello World');" },
    ],
    correct: "alert('Hello World');",
  },
  {
    question: "How to call a function in Javascript?",
    answers: [
      { text: "call booFunction();" },
      { text: "call function booFunction();" },
      { text: "booFunction();" },
      { text: "function booFunction();" },
    ],
    correct: "booFunction();",
  },
];

console.log(questions);
function getQuestions() {
  console.log(questions);

  for (var i = 0; i < questions.length; i++) {
    var currentQ = questions[i];
    console.log(currentQ);
  }

  //questionTitle.textContent = currentQ;
}
//These are the click events for start button
startBtn.addEventListener("click", function (event, questions) {
  event.preventDefault();
  timerEl.textContent = setTime();
  intro.style.display = "none";
  getQuestions(questions);
});

//This will allow the user to store (locally) the final score with initials when the submit button is clicked
submit.addEventListener("click", function () {
  scoreObj.initials = initials.value;
  scoreObj.score = score;
  savedArray.push(scoreObj);
  localStorage.setItem("highscore", JSON.stringify(savedArray));
});

//function to run timer
function setTime() {
  var timerInterval = setInterval(function () {
    secLeft--;
    timerEl.textContent = "Timer: " + secLeft;

    if (secLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//function to fill questions

function getChoices() {
  var currentChoices = [];
  for (var j = 0; j < questions.c.length; j++) {
    currentChoices.push(questions.c[j]);
  }
  choice1Btn.textContent = currentChoices[0];
  choice2Btn.textContent = currentChoices[1];
  choice3Btn.textContent = currentChoices[2];
  choice4Btn.textContent = currentChoices[3];
}

function checkAnswer() {
  if (userChoice === questions.a) {
    answerCheckEl.textContent = "Correct!";
    score++;
  } else {
    answerCheckEl.textContent = "Incorrect";
    score++;
    time--;
  }
  getQuestions();
}

function endQuiz() {
  if ((secLeft = 0)) {
    scoreTextEl.textContent = score;
    initialsEl.textContent = initials.value;
  } else if (questions[4].q) {
    scoreTextEl.textContent = score;
    initialsEl.textContent = initials.value;
  }
}
