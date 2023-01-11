/* Imports and Get Dom Elements */
const kanyeButtonEl = document.getElementById('kanye-button');
const peteButtonEl = document.getElementById('pete-button');
const doctorButtonEl = document.getElementById('doctor-button');
/* Get DOM Elements */

const kanyeContainer = document.getElementById('kanye-container');
const peteContainer = document.getElementById('pete-container');
const doctorContainer = document.getElementById('doctor-container');

const correctGuessesEl = document.getElementById('wins');
const incorrectGuessesEl = document.getElementById('losses');
const totalGuessesEl = document.getElementById('total');

/* State */
let correctGuesses = 0;
let totalGuesses = 0;

/* Events */
kanyeButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    displayResults('kanye', correctSpot);
});

peteButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    displayResults('pete', correctSpot);
});

doctorButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    displayResults('doctor', correctSpot);
});
/* Display Functions */

function getRandomHidingSpot() {
    const places = ['kanye', 'pete', 'doctor'];

    const index = Math.floor(Math.random() * places.length);
    const correctSpot = places[index];
    return correctSpot;
}

function displayResults(userGuess, correctSpot) {
    kanyeContainer.classList.remove('kim');
    peteContainer.classList.remove('kim');
    doctorContainer.classList.remove('kim');

    totalGuesses++;

    const resetFunction = document.getElementById(`${correctSpot}-container`);

    resetFunction.classList.add('kim');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalGuessesEl.textContent = totalGuesses;
    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = totalGuesses - correctGuesses;
}

// (don't forget to call any display functions you want to run on page load!)
