const ICONS = document.querySelectorAll('.icon');
const SELECTION_TEXT = document.querySelectorAll('.selection');
const USER_SCORE = document.querySelectorAll('.player-score');
const COMPUTER_SCORE = document.querySelectorAll('.computer-score');
const OPTIONS = ["rock", "paper", "scissors"];
const PLAYER_SELECTED = document.querySelectorAll('.player-weapon');
const COMPUTER_SELECTED = document.querySelectorAll('.computer-weapon');
const MESSAGES = document.querySelectorAll('.messages');
let playerScore = 0;
let computerScore = 0;

function showSelection(e) {
    SELECTION_TEXT.textContent = `${e.target.id}`;
}

function removeSelection() {
    SELECTION_TEXT.textContent = '';
}

ICONS.forEach(icon => {
    icon.addEventListener('mouseover', showSelection);
    icon.addEventListener('mouseleave', removeSelection);
})