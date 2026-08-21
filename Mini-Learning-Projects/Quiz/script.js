const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { text: "var", correct: true },
      { text: "int", correct: false },
      { text: "string", correct: false },
      { text: "define", correct: false },
    ],
  },

  {
    question: "Which symbol is used for a single-line comment?",
    answers: [
      { text: "//", correct: true },
      { text: "/*", correct: false },
      { text: "#", correct: false },
      { text: "<!--", correct: false },
    ],
  },
  {
    question: "Which method is used to print something in the console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "display()", correct: false },
      { text: "write()", correct: false },
    ],
  },

  {
    question: "Which data type stores true or false?",
    answers: [
      { text: "Boolean", correct: true },
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Object", correct: false },
    ],
  },

  {
    question: "Which method adds an element to the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "remove()", correct: false },
    ],
  },
  {
    question: "Which operator is used for strict equality?",
    answers: [
      { text: "===", correct: true },
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "!=", correct: false },
    ],
  },

  {
    question: "Which keyword creates a constant variable?",
    answers: [
      { text: "const", correct: true },
      { text: "constant", correct: false },
      { text: "fixed", correct: false },
      { text: "let", correct: false },
    ],
  },

  {
    question: "Which method converts JSON text into a JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "JSON.toObject()", correct: false },
    ],
  },

  {
    question: "Which event occurs when a user clicks an element?",
    answers: [
      { text: "click", correct: true },
      { text: "hover", correct: false },
      { text: "press", correct: false },
      { text: "changeClick", correct: false },
    ],
  },

  {
    question: "Which keyword is used to define a function?",
    answers: [
      { text: "function", correct: true },
      { text: "def", correct: false },
      { text: "func", correct: false },
      { text: "method", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressElement = document.getElementById("progress");

const quizbox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");
const bestScoreElement = document.getElementById("best-score");

let questionOrder = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
function startQuiz() {
  clearInterval(timer);
  currentQuestionIndex = 0;
  score = 0;
  questionOrder = [...questions];
  questionOrder.sort(() => Math.random() - 0.5);
  resultBox.classList.add("hide");
  quizbox.classList.remove("hide");
  nextButton.style.display = "none";
  showQuestion();
}
function showQuestion() {
  resetState();
  clearInterval(timer);
  timeLeft = 10;
  startTimer();
  let currentQuestion = questionOrder[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(event) {
  clearInterval(timer);
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct == "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
nextButton.addEventListener("click", () => {
  clearInterval(timer);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});
function showResult() {
  clearInterval(timer);
  saveScore();
  const bestScore = Number(localStorage.getItem("bestscore"));
  quizbox.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreElement.innerText = `Your score: ${score}/${questions.length}`;
  bestScoreElement.innerText = `Best score: ${bestScore}/${questions.length}`;
}
let timer;
function startTimer() {
  timer = setInterval(() => {
    timerElement.innerText = `Time: ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
      return;
    }
    timeLeft--;
  }, 1000);
}
function saveScore() {
  const previousScore = Number(localStorage.getItem("bestscore")) || 0;
  if (score > previousScore) {
    localStorage.setItem("bestscore", score);
  }
}
startTimer();
restartButton.addEventListener("click", startQuiz);
startQuiz();
