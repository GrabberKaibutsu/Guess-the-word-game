const words = ['deer', 'javascript', 'coding', 'mammals', 'case', 'birthday', 'credit', 'strange', 'project',
'sentence', 'else', 'winter', 'vital', 'butterfly', 'horror', 'mandela', 'county', 'skies', 'clear', 'movie', 
'alternate'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(selectedWord.length).fill('_');
let attemptsLeft = 7;

function updateDisplay() {
    document.getElementById("word-display").textContent = guessedWord.join(' ');
    document.getElementById("attempts").textContent = attemptsLeft;
}

function makeGuess() {
    const guessInput = document.getElementById("guess");
    const guess = guessInput.value.toLowerCase();

    if (guess.length === 1 && guess.match(/[a-z]/i)) {
        if (selectedWord.includes(guess)) {
            for (let i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] === guess) {
                    guessedWord[i] = guess;
                }
            }
        } else {
            attemptsLeft--;
        }

        updateDisplay();

        if (attemptsLeft === 0 || !guessedWord.includes('_')) {
            endGame(attemptsLeft === 0);
        }
    } else {
        alert('Please enter a vaild letter');
    }

    guessInput.value = '';
}

function endGame(isLose) {
    alert(isLose ? 'Game over, You lose.' : 'Congratulations! You guessed the word!');
    resetGame();
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = Array(selectedWord.length).fill('_');
    attemptsLeft = 7;
    updateDisplay();
}

document.addEventListener("DOMContentLoaded", function () {
    updateDisplay();
});