// Variablen definiert
let ScoreTeam1 = document.getElementById("score-Team1")
let ScoreTeam2 = document.getElementById("score-Team2")
let score1 = 0
let score2 = 0
let scoreFoul1 = document.getElementById("scoreFoul-1")
let scoreFoul2 = document.getElementById("scoreFoul-2")
let scoref1 = 0
let scoref2 = 0

// Funktionen erstellt
function leader(){
  if (score1 > score2){
    document.getElementById("score-Team1").style.border = "3px solid red";
    document.getElementById("score-Team2").style.border = "3px solid black";
  } else if (score2 > score1){
    document.getElementById("score-Team2").style.border = "3px solid red";
    document.getElementById("score-Team1").style.border = "3px solid black";
  } else {
    document.getElementById("score-Team1").style.border = "3px solid black";
    document.getElementById("score-Team2").style.border = "3px solid black";
  }
}

function leaderFoul(){
  if (scoref1 > scoref2){
    document.getElementById("scoreFoul-1").style.border = "3px solid green";
    document.getElementById("scoreFoul-2").style.border = "3px solid black";
  } else if (scoref2 > scoref1){
    document.getElementById("scoreFoul-1").style.border = "3px solid black";
    document.getElementById("scoreFoul-2").style.border = "3px solid green";
  } else {
    document.getElementById("scoreFoul-1").style.border = "3px solid black";
    document.getElementById("scoreFoul-2").style.border = "3px solid black";
  }

}



function add1(){
  score1 += 1
  ScoreTeam1.textContent = score1
  leader();
  
}

function add2(){
  score1 += 2
  ScoreTeam1.textContent = score1
  leader();
}

function add3(){
  score1 += 3
  ScoreTeam1.textContent = score1
  leader();
}


function add1B(){
  score2 += 1
  ScoreTeam2.textContent = score2
  leader();
}

function add2B(){
  score2 += 2
  ScoreTeam2.textContent = score2
  leader();
}

function add3B(){
  score2 += 3
  ScoreTeam2.textContent = score2
  leader();
}


function newGame(){
  score1 = 0
  score2 = 0
  ScoreTeam1.textContent = score1
  ScoreTeam2.textContent = score2
  leader();
  scoref1 = 0
  scoref2 = 0
  scoreFoul1.textContent = scoref1
  scoreFoul2.textContent = scoref2
  leaderFoul();
}

function addfoul(){
  scoref1 += 1
  scoreFoul1.textContent = scoref1
  leaderFoul();
}

function addfoul2(){
  scoref2 += 1
  scoreFoul2.textContent = scoref2
  leaderFoul();
}


// Timer
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let timerDisplay = document.getElementById("timer");

let totalTime = 12 * 60; // 12 Minuten in Sekunden
let timeRemaining = totalTime;
let timerInterval;

function updateTimerDisplay() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    
    // Formatierung auf zweistellige Zahlen (z.B. 09:05)
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

updateTimerDisplay(); // Initiales Update des Timer-Displays