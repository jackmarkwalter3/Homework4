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
var choiceA = $("#A");
var choiceB = $("#B");
var choiceC = $("#C");
var choiceD = $("#D");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");
const startButton = document.getElementById("startButton");

const lastQuestion = questions.length;
var runningQuestion = 0;


function showQuestion() {
    var q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.title + "</p>";
    choiceA.text(q.choices[0]);
    choiceB.text(q.choices[1]);
    choiceC.text(q.choices[2]);
    choiceD.text(q.choices[3]); 
}



function startQuiz() {
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    // showProgress();
    // showCounter();
    TIMER = setInterval(showCounter, 1000);
}

// function showProgress() {
//     for (var i = 0; i <= lastQuestion; i++) {
//         progress.innerHTML += "<div class='prog' id=" + i + "></div>";
//     }
// }

var count = 75

function showCounter() {
    if(count >= 0 && runningQuestion < lastQuestion) {
        counter.innerHTML = count;
        count--;
    }
    else {
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            showQuestion();
        }
        else {
            clearInterval(TIMER);
            showScoreBoard();
        }
    }
}


var highScores = [];


// function checkAnswer(answer) {
//     if (answer.innerHTML == questions[runningQuestion].answer) {
//         console.log(count);
//     }
//     else {
//         answerIsWrong();
//     }
//     if (runningQuestion < lastQuestion) {
//         runningQuestion++;
//         showQuestion();
//     }
//     else {
//         clearInterval(TIMER);
//         showScore();
//     }
    
// }

function showScoreBoard() {
    scoreDiv.style.display = "block";
    $("#insertScore").text(count);
    quiz.style.display = "none";
    counter.innerHTML = "";
}


// function answerIsWrong() {
//     count = count - 10;
// }

startButton.addEventListener("click", startQuiz);

$(".choice").click(function(){
    var answer = $(this).text();
    console.log(answer);
    if(answer === questions[runningQuestion].answer){
        runningQuestion++;
        if(runningQuestion < lastQuestion){
            showQuestion();
        }
        else {
            showScoreBoard();
        }
    }
    else {
        count = count - 10;
        runningQuestion++;
        if(runningQuestion < lastQuestion){
            showQuestion();
        }
        else {
            showScoreBoard();
        }
    }
})

// choice1.addEventListener("click", checkAnswer);
// choice2.addEventListener("click", checkAnswer);
// choice3.addEventListener("click", checkAnswer);
// choice4.addEventListener("click", checkAnswer);