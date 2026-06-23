const startScreen = document.getElementById("start-screen");
const subjectScreen = document.getElementById("subject-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const subjectButtons = document.querySelectorAll(".subject-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizData = {
  mathadvanced: [
    { question: "What is the gradient of the tangent to the curve f(x) = 3x² - 4x + 1 at the point where x = 2?", answers: [
      { text: "2", correct: false },
      { text: "5", correct: false },
      { text: "8", correct: true },
      { text: "12", correct: false },
    ]},
    { question: "If a line passes through the points (1, 3) and (4, 9), what is its gradient?", answers: [
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "1/2", correct: false },
      { text: "6", correct: false },
    ]},
    { question: "What is the value of x if log_3(x) = 4?", answers: [
      { text: "12", correct: false },
      { text: "64", correct: false },
      { text: "81", correct: true },
      { text: "7", correct: false },
    ]},
    { question: "A sequence is given by 3, 7, 11, 15, ... What is the 20th term of this arithmetic progression?", answers: [
      { text: "79", correct: false },
      { text: "83", correct: true },
      { text: "76", correct: false },
      { text: "80", correct: false },
    ]},
    { question: "For the function f(x) = x² - 4, what are the x-intercepts?", answers: [
      { text: "x = 4 and x = -4", correct: false },
      { text: "x = 2 and x = -2", correct: true },
      { text: "x = 0", correct: false },
      { text: "There are no x-intercepts", correct: false },
    ]},
  ],
  mathextension: [
    { question: "What is the value of P(5, 2) (the number of permutations of 5 items taken 2 at a time)?", answers: [
      { text: "10", correct: false },
      { text: "20", correct: true },
      { text: "60", correct: false },
      { text: "120", correct: false },
    ]},
    { question: "If sin(θ) = 3/5 and θ is in the second quadrant, what is the value of tan(θ)?", answers: [
      { text: "4/3", correct: false },
      { text: "-4/3", correct: false },
      { text: "3/4", correct: false },
      { text: "-3/4", correct: true },
    ]},
    { question: "What is the domain of the function f(x) = 1 / √(x² - 9)?", answers: [
      { text: "x > 3 or x < -3", correct: true },
      { text: "-3 < x < 3", correct: false },
      { text: "All real x except x = ±3", correct: false },
      { text: "x ≥ 3", correct: false },
    ]},
    { question: "What is the acute angle between the lines y = 2x and y = -3x + 1, to the nearest degree?", answers: [
      { text: "45°", correct: true },
      { text: "30°", correct: false },
      { text: "60°", correct: false },
      { text: "15°", correct: false },
    ]},
    { question: "Find the coordinates of the point that divides the interval from A(1, 2) to B(7, 8) internally in the ratio 1:2.", answers: [
      { text: "(3, 4)", correct: true },
      { text: "(4, 5)", correct: false },
      { text: "(2, 3)", correct: false },
      { text: "(5, 6)", correct: false },
    ]},
  ],
  chemistry: [
    { question: "Which of the following molecules features a non-polar covalent bond?", answers: [
      { text: "H2O", correct: false },
      { text: "NH3", correct: false },
      { text: "Cl2", correct: true },
      { text: "HCl", correct: false },
    ]},
    { question: "How many moles of gas are present in 11.2 L of an ideal gas at Standard Temperature and Pressure (STP)?", answers: [
      { text: "0.50 mol", correct: true },
      { text: "1.00 mol", correct: false },
      { text: "2.00 mol", correct: false },
      { text: "22.4 mol", correct: false },
    ]},
    { question: "What type of intermolecular force is primarily responsible for the relatively high boiling point of water?", answers: [
      { text: "Dispersion forces", correct: false },
      { text: "Dipole-dipole forces", correct: false },
      { text: "Hydrogen bonding", correct: true },
      { text: "Ionic bonding", correct: false },
    ]},
    { question: "Which of the following occurs when a system at equilibrium undergoes an increase in temperature?", answers: [
      { text: "The forward reaction rate stays the same", correct: false },
      { text: "The equilibrium shifts to favor the exothermic reaction", correct: false },
      { text: "The equilibrium shifts to favor the endothermic reaction", correct: true },
      { text: "The activation energy decreases", correct: false },
    ]},
    { question: "What is the empirical formula of a compound that contains 40.0% Carbon, 6.7% Hydrogen, and 53.3% Oxygen by mass?", answers: [
      { text: "CHO", correct: false },
      { text: "CH2O", correct: true },
      { text: "CHO2", correct: false },
      { text: "C2H4O2", correct: false },
    ]},
  ],
  business: [
    { question: "Which business structure exposes its owners to unlimited liability?", answers: [
      { text: "Sole Trader", correct: true },
      { text: "Private Company (Pty Ltd)", correct: false },
      { text: "Public Company (Ltd)", correct: false },
      { text: "Government Enterprise", correct: false },
    ]},
    { question: "What is the primary role of Human Resource Management in a business?", answers: [
      { text: "Managing cash flow and balance sheets", correct: false },
      { text: "Designing promotional and advertising campaigns", correct: false },
      { text: "Managing the relationship between the employer and employees", correct: true },
      { text: "Controlling the physical production line of goods", correct: false },
    ]},
    { question: "Which of the following represents an external influence on a business?", answers: [
      { text: "Changes to government taxation policy", correct: true },
      { text: "The organizational structure of the staff", correct: false },
      { text: "The business's internal culture", correct: false },
      { text: "The chosen style of management", correct: false },
    ]},
    { question: "What is the main purpose of establishing a business's mission statement?", answers: [
      { text: "To calculate accurate tax obligations", correct: false },
      { text: "To list the precise pricing of all inventory", correct: false },
      { text: "To articulate the core purpose and values of the business", correct: true },
      { text: "To outline the exact daily roster for employees", correct: false },
    ]},
    { question: "In a business life cycle, what is the primary challenge faced during the 'Establishment' stage?", answers: [
      { text: "Managing rapid growth and hiring more managers", correct: false },
      { text: "Securing cash flow and finding a consistent customer base", correct: true },
      { text: "Diversifying products to avoid market decline", correct: false },
      { text: "Selling off shares to the general public", correct: false },
    ]},
  ],
  enterprise: [
    { question: "Which type of database model organizes data into tables consisting of rows and columns?", answers: [
      { text: "Flat-file model", correct: false },
      { text: "Hierarchical model", correct: false },
      { text: "Relational model", correct: true },
      { text: "Network model", correct: false },
    ]},
    { question: "In project management, what is the primary purpose of a Gantt chart?", answers: [
      { text: "To calculate the total budget expenses", correct: false },
      { text: "To visually schedule tasks and track project timelines", correct: true },
      { text: "To map out database entity relationships", correct: false },
      { text: "To test software code for syntax errors", correct: false },
    ]},
    { question: "Which of the following best describes the function of a primary key in a database table?", answers: [
      { text: "It encrypts the entire table to prevent unauthorized access", correct: false },
      { text: "It uniquely identifies each record within the table", correct: true },
      { text: "It links two different databases together across a network", correct: false },
      { text: "It automatically backs up data to the cloud", correct: false },
    ]},
    { question: "What type of system conversion involves completely stopping the old system and starting the new system immediately?", answers: [
      { text: "Direct conversion", correct: true },
      { text: "Parallel conversion", correct: false },
      { text: "Phased conversion", correct: false },
      { text: "Pilot conversion", correct: false },
    ]},
    { question: "Which legal framework in Australia primarily protects individual data privacy from being misused by enterprises?", answers: [
      { text: "The Copyright Act 1968", correct: false },
      { text: "The Privacy Act 1988", correct: true },
      { text: "The Fair Work Act 2009", correct: false },
      { text: "The Spam Act 2003", correct: false },
    ]},
  ],
  religion: [
    { question: "Which core characteristic of religion relates to a belief in a divine power beyond the human experience?", answers: [
      { text: "Immanent dimension", correct: false },
      { text: "Transcendent dimension", correct: true },
      { text: "Rituals and ceremonies", correct: false },
      { text: "Ethics", correct: false },
    ]},
    { question: "What does the term 'Dreaming' encapsulate within Aboriginal spirituality?", answers: [
      { text: "Only the stories told to children at bedtime", correct: false },
      { text: "A historical era that ended when colonization began", correct: false },
      { text: "A meta-temporal concept incorporating past, present, and future creation and law", correct: true },
      { text: "The specific ceremonies performed at a burial", correct: false },
    ]},
    { question: "Which ancient religious tradition is known for practicing the Caste system historically?", answers: [
      { text: "Buddhism", correct: false },
      { text: "Hinduism", correct: true },
      { text: "Islam", correct: false },
      { text: "Judaism", correct: false },
    ]},
    { question: "In the context of the Abrahamic faiths, what is a Covenant?", answers: [
      { text: "A sacred, binding agreement between God and His people", correct: true },
      { text: "A building used exclusively for prayer", correct: false },
      { text: "The title given to a religious leader", correct: false },
      { text: "A specific book of laws added recently", correct: false },
    ]},
    { question: "How does an immanent religious worldview perceive the divine?", answers: [
      { text: "As completely separate and distant from the physical world", correct: false },
      { text: "As non-existent and purely a social construct", correct: false },
      { text: "As a force dwelling constantly within the human soul and nature", correct: true },
      { text: "As restricted only to one sacred mountain text", correct: false },
    ]},
  ],
  englishadv: [
    { question: "Which literary device uses an object, person, or situation to represent something deeper than its literal meaning?", answers: [
      { text: "Metonymy", correct: false },
      { text: "Symbolism", correct: true },
      { text: "Oxymoron", correct: false },
      { text: "Personification", correct: false },
    ]},
    { question: "What is textual integrity?", answers: [
      { text: "The moral correctness of the author's argument", correct: false },
      { text: "The unified structure and enduring value of a text over time", correct: true },
      { text: "The number of explicit references cited in a work", correct: false },
      { text: "A text that has never been edited or abridged", correct: false },
    ]},
    { question: "What is the primary effect of an author using a non-linear narrative structure?", answers: [
      { text: "It ensures the text follows a strict chronological timeline", correct: false },
      { text: "It allows for exploration of memory, perspective, and thematic parallels", correct: true },
      { text: "It removes the need for character development", correct: false },
      { text: "It forces the reader to only look at third-person objective views", correct: false },
    ]},
    { question: "Which term refers to the socially and historically constructed circumstances surrounding the creation of a text?", answers: [
      { text: "Context", correct: true },
      { text: "Syntax", correct: false },
      { text: "Form", correct: false },
      { text: "Medium", correct: false },
    ]},
    { question: "What does an 'unreliable narrator' bring to a literary text?", answers: [
      { text: "An objective, factual reporting of events", correct: false },
      { text: "A layer of psychological complexity where the reader must question the truth", correct: true },
      { text: "A fast-paced sequence of action-based plots", correct: false },
      { text: "An omniscient understanding of all characters' thoughts", correct: false },
    ]},
  ]
};

let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

startButton.addEventListener("click", () => {
  startScreen.classList.remove("active");
  subjectScreen.classList.add("active");
});

subjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.subject);
  });
});

restartButton.addEventListener("click", restartQuiz);

function startQuiz(subject) {
  currentQuizQuestions = quizData[subject];
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  totalQuestionsSpan.textContent = currentQuizQuestions.length;
  maxScoreSpan.textContent = currentQuizQuestions.length;

  subjectScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  const currentQuestion = currentQuizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / currentQuizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;

  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (correct) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / currentQuizQuestions.length) * 100;
  if (percentage === 100) {
    resultMessage.textContent = "Excellent work!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job!";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Good effort!";
  } else {
    resultMessage.textContent = "Better luck next time!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  subjectScreen.classList.add("active");
}
