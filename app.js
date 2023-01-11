/* Imports and Get Dom Elements */
const kanyeButtonEl = document.getElementById('kanye-button');
const peteButtonEl = document.getElementById('pete-button');
const doctorButtonEl = document.getElementById('doctor-button');
/* Get DOM Elements */

const kanyeContainer = document.getElementById('kanye-container');
const peteContainer = document.getElementById('pete-container');
const doctorContainer = document.getElementById('doctor-container');

const correctGuessesEl = document.getElementById('wins');
console.log(correctGuessesEl);
const incorrectGuessesEl = document.getElementById('losses');
const totalGuessesEl = document.getElementById('total');

/* State */
let correctGuesses = 0;
let totalGuesses = 0;

/* Events */
kanyeButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('kanye', correctSpot);
});

peteButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('pete', correctSpot);
});

doctorButtonEl.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    handleGuess('doctor', correctSpot);
});
/* Display Functions */

function getRandomHidingSpot() {
    const places = ['kanye', 'pete', 'doctor'];

    const index = Math.floor(Math.random() * places.length);
    const correctSpot = places[index];
    return correctSpot;
}

function handleGuess(userGuess, correctSpot) {
    kanyeContainer.classList.remove('face');
    peteContainer.classList.remove('face');
    doctorContainer.classList.remove('face');

    totalGuesses++;

    const correctHidingSpot = document.getElementById(`${correctSpot}-container`);

    correctHidingSpot.classList.add('face');

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalGuessesEl.textContent = totalGuesses;
    correctGuessesEl.textContent = correctGuesses;
    incorrectGuessesEl.textContent = totalGuesses - correctGuesses;
}

// (don't forget to call any display functions you want to run on page load!)
