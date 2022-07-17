const choices = [ 'rock', 'paper', 'scissors' ];

// initial game state
let playerScore = 0;
let computerScore = 0;
let roundLimit = 5;
let roundCount = 0;
let isGameOver = false;

// html elements
const gameAlert = document.querySelector("#gameAlert");
const gameHistory = document.querySelector("#gameHistory");
const playerBoxScore = document.querySelector("#playerBoxScore");
const computerBoxScore = document.querySelector("#computerBoxScore");
const roundElement = document.querySelector("#roundElement");
const playerHistory = document.querySelector("ul.player");
const computerHistory = document.querySelector("ul.computer");
const gameResultSection = document.querySelector("#gameResult");
const gameModal = document.querySelector("#myModal");
const modalBackdrop = document.querySelector("#myBackdrop");
const gameResultMessageContainer = document.querySelector("#gameResultMessage");
const gameResultImgContainer = document.querySelector("#gameResultImgContainer");

let gameResultMessage;
let gameResultImageSrc;

playerBoxScore.innerText = playerScore;
computerBoxScore.innerText = computerScore;

// player selected item
function selectItem(item) {
    if (!isGameOver) {
        singleRound(item);
    }
}

// Update game state
function updateGameData(playerChoice, computerChoice, result) {
    console.table(arguments);
    if (result == 'win') {
        roundCount++;
        playerScore++
        playerBoxScore.innerText = playerScore;
        updatePlayerHistory(playerChoice, result);
        updateComputerHistory(computerChoice, 'lose');
    } else if (result == 'lose') {
        roundCount++;
        computerScore++
        computerBoxScore.innerText = computerScore;
        updatePlayerHistory(playerChoice, result);
        updateComputerHistory(computerChoice, 'win');
    } else {
        updatePlayerHistory(playerChoice, result);
        updateComputerHistory(computerChoice, result);
    }

    if (roundCount == roundLimit) {
        isGameOver = true;
        if (playerScore > computerScore) {
            gameResultMessage = 'You Won!';
            gameResultImageSrc = './images/happyface.png';
        } else {
            gameResultMessage = 'You Lost!';
            gameResultImageSrc = './images/sad.png';
        }
        // Set up game result modal
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', gameResultImageSrc);
        imgElement.setAttribute('width', '200');
        imgElement.setAttribute('alt', 'result');
        gameResultImgContainer.appendChild(imgElement);
        gameResultMessageContainer.innerText = gameResultMessage;
        modalBackdrop.style.display = 'block';
        gameModal.style.display = 'block';
        gameModal.classList.add('show');
    }
}

// Close game modal
function closeModal() {
    modalBackdrop.style.display = 'none';
    gameModal.style.display = 'none';
    gameModal.classList.remove('show');
}

// Update player history
function updatePlayerHistory(choice, result) {
    const lineItem = document.createElement('li');
    const lineItemChoice = document.createElement('span');
    const lineItemResult = document.createElement('span');
    lineItemChoice.innerText = choice;
    lineItemResult.innerText = result;
    lineItemResult.classList.add( (result == 'win') ? 'text-success' : (result == 'lose') ? 'text-danger' : 'text-secondary');
    lineItem.append(lineItemResult);
    lineItem.append(lineItemChoice);
    playerHistory.appendChild(lineItem);
}

// Update computer history
function updateComputerHistory(choice, result) {
    const lineItem = document.createElement('li');
    const lineItemChoice = document.createElement('span');
    const lineItemResult = document.createElement('span');
    lineItemChoice.innerText = choice;
    lineItemResult.innerText = result;
    lineItemResult.classList.add( (result == 'win') ? 'text-success' : (result == 'lose') ? 'text-danger' : 'text-secondary');
    lineItem.append(lineItemChoice);
    lineItem.append(lineItemResult);
    computerHistory.appendChild(lineItem);
}

// Computer selection
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * choices.length)
    return choices[computerChoice];
}

// Start a single round
function singleRound(playerSelection) {
    let computerChoice = computerPlay();
    switch(true) {
        case ( playerSelection === computerChoice ):
            updateGameData(playerSelection, computerChoice, 'tie');
            break;
        case ( (playerSelection === 'rock') && (computerChoice === 'scissors') ):
            updateGameData(playerSelection, computerChoice, 'win');
            break;
        case ( (playerSelection === 'rock') && (computerChoice === 'paper') ):
            updateGameData(playerSelection, computerChoice, 'lose');
            break;
        case ( (playerSelection === 'paper') && (computerChoice === 'rock') ):
            updateGameData(playerSelection, computerChoice, 'win');
            break;
        case ( (playerSelection === 'paper') && (computerChoice === 'scissors') ):
            updateGameData(playerSelection, computerChoice, 'lose');
            break;
        case ( (playerSelection === 'scissors') && (computerChoice === 'paper') ):
            updateGameData(playerSelection, computerChoice, 'win');
            break;
        case ( (playerSelection === 'scissors') && (computerChoice === 'rock') ):
            updateGameData(playerSelection, computerChoice, 'lose');
            break;
    }
}

// Reload game
function reloadGame() {
    window.location.reload();
}
