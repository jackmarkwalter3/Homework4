var questions = [ 
    {
        title:"Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer:  "alerts"
    },
    {
        title:"The condition in an if / else statement is enclosed within _____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer:  "parentheses"
    },
    {
        title:"Arrays in javascript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer:  "all of the above"
    },
    {
        title:"String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer:  "quotes"
    },
    {
        title:"A very useful tool used during development and debugging for printing content to the debugger is ______.",
        choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
        answer:  "console.log"
    }
];

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("qImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");

var score = 0;
const lastQuestion = questions.length - 1;
var runningQuestion = 0;


function showQuestion() {
    var q = questions[runningQuestion];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.title + "</p>";
    //I will need to update the below to match my matrix...
    choiceA.innerHTML = q.choices[0];
    choiceB.innerHTML = q.choices[1];
    choiceC.innerHTML = q.choices[2];
    choiceD.innerHTML = q.choices[3]; 
}



function startQuiz() {
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    showProgress();
    showCounter();
    TIMER = setInterval(showCounter, 1000);
}

function showProgress() {
    for (var i = 0; i <= lastQuestion; i++) {
        progress.innerHTML += "<div class='prog' id=" + i + "></div>";
    }
}

var count = 0
var questionTime = 10;
var gaugeWidth  = 150;
var gaugeUnit = gaugeWidth / questionTime;

function showCounter() {
    if(count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit;
        count++;
    }
    else {
        count = 0;
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            showQuestion();
        }
        else {
            clearInterval(TIMER);
            showScore();
        }
    }
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].answer) {
        answerIsCorrect();
        score++
    }
    else {
        answerIsWrong()
    }
    if (runningQuestion < lastQuestion) {
        count = 0;
        runningQuestion++;
        showQuestion();
    }
    else {
        clearInterval(TIMER);
        showScore();
    }

}

function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

start.addEventListener("click", startQuiz);
choiceA.addEventListener("click", checkAnswer);
choiceB.addEventListener("click", checkAnswer);
choiceC.addEventListener("click", checkAnswer);

// //for (var i = 0; i < questions.length; i++) {
    //   //  response = 
    // //}
    
function showScore() {
    scoreDiv.style.display = "block"
    var scorePerCent = Math.round(100 * score / questions.length);
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";

}