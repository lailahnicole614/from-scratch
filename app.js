/* Imports and Get Dom Elements */
const kanyeButtonEl = document.getElementById('kanye-button');
const peteButtonEl = document.getElementById('pete-button');
const doctorButtonEl = document.getElementById('doctor-button');
/* Get DOM Elements */

const kanyeContainer = document.getElementById('kanye-container');
const peteContainer = document.getElementById('pete-container');
const doctorContainer = document.getElementById('doctor-container');

const correctGuessesEL = document.getElementById('wins');
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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
