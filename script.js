const choices = [ 'rock', 'paper', 'scissors' ];

// initial game state
let playerScore = 0;
let computerScore = 0;
let roundLimit = 5;
let roundCount = 0;

// html elements
const gameAlert = document.querySelector("#gameAlert");
const gameHistory = document.querySelector("#gameHistory");
const playerBoxScore = document.querySelector("#playerBoxScore");
const computerBoxScore = document.querySelector("#computerBoxScore");
const roundElement = document.querySelector("#roundElement");
const playerHistory = document.querySelector("ul.player");
const computerHistory = document.querySelector("ul.computer");

let gameResultMessage;

playerBoxScore.innerText = playerScore;
computerBoxScore.innerText = computerScore;

// player selected item
function selectItem(item) {
    if (item) {
        singleRound(item);
    }
}

function checkScore(result, callback) {
    console.log(roundCount);
    callback(result);
    if ( roundCount >= roundLimit ) {
        if (confirm('Game over')) {
            window.location.reload();
        }
    } 
}

function updateScore(result, callback) {
    if (result == 'win') {
        playerBoxScore.innerText = ++playerScore;
        callback
    } else if (result == 'lose') {
        computerBoxScore.innerText = ++computerScore;
    }
}

function updateGameData(playerChoice, computerChoice, result) {
    console.table(arguments);
}

// these can be refactored
function updatePlayerHistory(choice, result) {
    const lineItem = document.createElement('li');
    const lineItemChoice = document.createElement('span');
    const lineItemResult = document.createElement('span');
    lineItemChoice.innerText = choice;
    lineItemResult.innerText = result;
    lineItem.append(lineItemResult);
    lineItem.append(lineItemChoice);
    playerHistory.appendChild(lineItem);
}

function updateComputerHistory(choice, result) {
    const lineItem = document.createElement('li');
    const lineItemChoice = document.createElement('span');
    const lineItemResult = document.createElement('span');
    lineItemChoice.innerText = choice;
    lineItemResult.innerText = result;
    lineItem.append(lineItemChoice);
    lineItem.append(lineItemResult);
    computerHistory.appendChild(lineItem);
}

// computer makes choice
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice];
}

function singleRound(playerSelection) {
    let computerChoice = computerPlay();
    switch(true) {
        case ( playerSelection === computerChoice ):
            // updatePlayerHistory(playerSelection, 'tie');
            // updateComputerHistory(computerChoice, 'tie');
            // checkScore('tie', updateScore);
            break;
        case ( (playerSelection === 'rock') && (computerChoice === 'scissors') ):
            // updatePlayerHistory(playerSelection, 'win');
            // updateComputerHistory(computerChoice, 'lose');
            // roundCount++;
            // checkScore('win', updateScore);
            break;
        case ( (playerSelection === 'rock') && (computerChoice === 'paper') ):
            // updatePlayerHistory(playerSelection, 'lose');
            // updateComputerHistory(computerChoice, 'win');
            // roundCount++;
            // checkScore('lose', updateScore);
            break;
        case ( (playerSelection === 'paper') && (computerChoice === 'rock') ):
            // updatePlayerHistory(playerSelection, 'win');
            // updateComputerHistory(computerChoice, 'lose');
            // roundCount++;
            // checkScore('win', updateScore);
            break;
        case ( (playerSelection === 'paper') && (computerChoice === 'scissors') ):
            // updatePlayerHistory(playerSelection, 'lose');
            // updateComputerHistory(computerChoice, 'win');
            // roundCount++;
            // checkScore('lose', updateScore);
            break;
        case ( (playerSelection === 'scissors') && (computerChoice === 'paper') ):
            // updatePlayerHistory(playerSelection, 'win');
            // updateComputerHistory(computerChoice, 'lose');
            // roundCount++;
            // checkScore('win', updateScore);
            break;
        case ( (playerSelection === 'scissors') && (computerChoice === 'rock') ):
            // updatePlayerHistory(playerSelection, 'lose');
            // updateComputerHistory(computerChoice, 'win');
            // roundCount++;
            // checkScore('lose', updateScore);
            break;
    }
}
