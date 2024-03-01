let questions = [
  {
    title: "1. Where is the correct place to insert a JavaScript?",
    options: [
      "The <body> section",
      "Both the <head> section and the <body> section",
      "The <head> section",
      "None of the above",
    ],
    answer: 1,
    score: 2,
  },
  {
    title: "2. How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
    ],
    answer: 3,
    score: 2,
  },
  {
    title: "3. How do you create a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "void myFunc() {}",
      "myFunc() {}",
      "myFunc function() {}",
    ],
    answer: 0,
    score: 2,
  },
  {
    title: "4. What SQL statement is used to extract data from a database?",
    options: ["OPEN", "GET", "EXTRACT", "SELECT"],
    answer: 3,
    score: 2,
  },
  {
    title: "5. Founder of C++ ",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "van Rossum", "JetBrains"],
    answer: 1,
    score: 2,
  },
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

function displayQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question").textContent = question.title;
  let options = "";
  for (let i = 0; i < question.options.length; i++) {
    options += `<input type="radio" name="option" value="${i}">${question.options[i]}<br>`;
  }
  document.getElementById("options").innerHTML = options;
  document.getElementById("submit").style.display = "block";
  document.getElementById("next").style.display = "none";
}

function handleSubmit() {
  let selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option");
    return;
  }
  let answer = parseInt(selectedOption.value);
  userAnswers.push(answer);
  if (answer === questions[currentQuestion].answer) {
    score += questions[currentQuestion].score;
    document.getElementById("status").textContent = "Correct!";
    document.getElementById("status").style =
      "background-color: green; color: white; font-size: 1em; border: none; border-radius: 5px; width: 66px; padding: 2px; margin: 5px ";
  } else {
    document.getElementById("status").textContent = "Incorrect!";
    document.getElementById("status").style =
      "background-color: red; color: white; font-size: 1em; border: none; border-radius: 5px; width: 78px; padding: 2px; margin: 5px ";
  }
  document.getElementById("submit").style.display = "none";
  document.getElementById("next").style.display = "block";
}

function handleNext() {
  document.getElementById("status").textContent = "";
  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("status").style.display = "none";
    displayQuestion();
  } else {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("restart").style.display = "block";
    document.getElementById("status").style.display = "none";
    displayAnswerKey();
    document.querySelector("h1").textContent = `Score: ${score}`;
    document.getElementById("Answer").style.display = "block";
  }
}

function displayAnswerKey() {
  let answerKey = "";
  document.getElementById("display").style.display = "block";
  for (let i = 0; i < questions.length; i++) {
    answerKey += `${questions[i].title} &RightArrow;`;
    let j = questions[i].answer;
    answerKey += `  <p style="display : inline-block; color : aliceblue; background-color : green; 
    border-radius : 6px; width : auto; padding : 3.5px;">${questions[i].options[j]} </p><br>`;
  }
  answerKey += "<br>";
  document.getElementById("answerKey").innerHTML = answerKey;
  document.getElementById("answerKey").style.display = "block";
  document.getElementById("restart").style.display = "block";
}

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  userAnswers = [];
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("Answer").style.display = "none";
  document.getElementById("display").style.display = "none";
  document.getElementById("restart").style.display = "none";
  document.querySelector("h1").textContent = `Quiz`;
  displayQuestion();
}

document.getElementById("submit").addEventListener("click", handleSubmit);
document.getElementById("next").addEventListener("click", handleNext);
document.getElementById("restart").addEventListener("click", restartQuiz);

displayQuestion();
