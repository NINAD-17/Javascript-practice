// Rock Paper Scissor Game Using JS



let resultDiv = document.getElementById("result");
let playerScore = document.getElementById("player-score");
let hand = document.getElementById("hands");
// let playerChoicediv = document.getElementById("playerChoiceDiv").lastElementChild;
let playerChoicediv = document.querySelector(".score");
// let selectedOpt = document.getElementsByClassName(".opt");
let selectedOptTxt = document.getElementById("selectedTxt");

let totalScore = {playerScore: 0, compScore: 0};

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  return choice[randomChoice];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
      // All situations where human wins, set `score` to 1
      // make sure to use else ifs here
  } else if (playerChoice == "Rock" && computerChoice == "Scissor") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissor" && computerChoice == "Paper") {
    score = 1;
    // Otherwise human loses (aka set score to -1)
  } else {
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    playerChoicediv.innerText = score;
    hand.innerText = `👦${playerChoice} Vs 🤖${computerChoice}`;
    resultDiv.innerText = "You Lose! 😩";
  } else if (score == 1) {
    playerChoicediv.innerText = score;
    hand.innerText = `👦${playerChoice} Vs 🤖${computerChoice}`;
    resultDiv.innerText = "You Win! 🥳";
  } else {
    playerChoicediv.innerText = score;
    hand.innerText = `👦${playerChoice} Vs 🤖${computerChoice}`;
    resultDiv.innerText = "It's a Draw! 😐";
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  // selectedOptTxt.innerText = btn.value;
  const compChoice = getComputerChoice();
  const userScore = getResult(playerChoice, compChoice);
  // totalScore["playerScore"] = score;
  // totalScore["compScore"] = score;
  showResult(userScore, playerChoice, compChoice);
}



// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  const rpsBtn = document.querySelectorAll(".rpsButton");
  rpsBtn.forEach(btn => {
    btn.onclick = () => onClickRPS(btn.value);
  });

  // Add a click listener to the end game button that runs the endGame() function on click
  const endtheGame = document.getElementById("endGameButton");
  endtheGame.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  playerChoicediv.innerText = ("Play to get Score  " + '');
  hand.innerText = '';
  resultDiv.innerText = '';
}

playerChoicediv.innerText = ("Play to get Score  " + '');
playGame();