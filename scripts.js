const ICONS = document.querySelectorAll('.icon');
const SELECTION_TEXT = document.querySelector('.selection');
const USER_SCORE = document.querySelector('.player-score');
const COMP_SCORE = document.querySelector('.computer-score');
const OPTIONS = ["rock", "paper", "scissors"];
const PLAYER_SELECTED = document.querySelector('.user-weapon');
const COMPUTER_SELECTED = document.querySelector('.comp-weapon');
const MESSAGES = document.querySelector('.messages');
let playerScore = 0;
let compScore = 0;

function showSelection(e) {
    SELECTION_TEXT.textContent = `${e.target.id}`;
}

function removeSelection() {
    SELECTION_TEXT.textContent = '';
}

ICONS.forEach(icon => {
    icon.addEventListener('mouseover', showSelection);
    icon.addEventListener('mouseleave', removeSelection);
    icon.addEventListener('mousedown', playRound);
})

function playRound(e) {
    let compSelection = OPTIONS[Math.floor(Math.random() * 3)]
    let playerSelection = `${e.target.id}`;
    if(playerSelection == compSelection) {
        PLAYER_SELECTED.style.cssText = 'color: gray; font-size: 250%;';
        PLAYER_SELECTED.textContent = `${playerSelection}`;
        COMPUTER_SELECTED.style.cssText = 'color: gray; font-size: 250%;';
        COMPUTER_SELECTED.textContent = `${compSelection}`;
        USER_SCORE.textContent = `USER: ${playerScore}`;
        COMP_SCORE.textContent = `COMPUTER: ${compScore}`;
        MESSAGES.style.cssText = 'color: gray; text-size: 150%;';
        MESSAGES.textContent = `It\'s a tie!`;
    }else if ((playerSelection == "rock" && compSelection == "scissors") ||
    (playerSelection == "paper" && compSelection == "rock") ||
    (playerSelection == "scissors" && compSelection == "paper")) {
        PLAYER_SELECTED.style.cssText = 'color: green; font-size: 250%;';
        PLAYER_SELECTED.textContent = `${playerSelection}`;
        COMPUTER_SELECTED.style.cssText = 'color: red; font-size: 250%;';
        COMPUTER_SELECTED.textContent = `${compSelection}`;
        playerScore++;
        USER_SCORE.textContent = `USER: ${playerScore}`;
        COMP_SCORE.textContent = `COMPUTER: ${compScore}`;
        MESSAGES.style.cssText = 'color: gray; font-size: 150%';
        MESSAGES.textContent = "You win this round!";
    }else {
        PLAYER_SELECTED.style.cssText = 'color: red; font-size: 250%;';
        PLAYER_SELECTED.textContent = `${playerSelection}`;
        COMPUTER_SELECTED.style.cssText = 'color: green; font-size: 250%;';
        COMPUTER_SELECTED.textContent = `${compSelection}`;
        compScore++;
        USER_SCORE.textContent = `USER: ${playerScore}`;
        COMP_SCORE.textContent = `COMPUTER: ${compScore}`;
        MESSAGES.style.cssText = 'color:gray; font-size: 150%';
        MESSAGES.textContent = "Computer wins this round!";
    }if (playerScore == 5 || compScore == 5) {
	    ICONS.forEach(icon => {
		    icon.removeEventListener('mouseover', showSelection);
		    icon.removeEventListener('mouseleave', removeSelection);
		    icon.removeEventListener('mousedown', playRound);
	    })
        SELECTION_TEXT.textContent = ''
        SELECTION_TEXT.appendChild(NEW_GAME);
        NEW_GAME.addEventListener('click', resetGame);
        if (playerScore == 5) {
            MESSAGES.textContent = 'You win it all!!';
        }
        else {
            MESSAGES.textContent = 'Computer wins. Ouch!!';
        }
    }
}

const NEW_GAME = document.createElement('button');
NEW_GAME.classList.add('btn')
NEW_GAME.textContent = 'Replay!'

function resetGame() {
    location.reload()
}