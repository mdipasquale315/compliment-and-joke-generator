/**
 * Compliment Generator Logic
 */

// 1. Predefined list of compliments
const compliments = [
    "Your positivity is infectious.",
    "You’re an incredible listener; it’s a rare gift.",
    "The world is better because you're in it.",
    "Your creativity is on a whole other level.",
    "You have a great sense of humor!",
    "Everything seems brighter when you walk into the room.",
    "You are a great problem solver.",
    "Your kindness is a balm to all who encounter it.",
    "You’re more helpful than you realize.",
    "You have a way of making people feel seen and heard.",
    "Your hard work is definitely paying off!"
];

// 2. Select DOM elements
const complimentText = document.getElementById('compliment-text');
const generateBtn = document.getElementById('generate-btn');

// Variable to track the last index to avoid repeats
let lastIndex = -1;

/**
 * Function to pick a random compliment
 */
function getNewCompliment() {
    let randomIndex;

    // Ensure we don't pick the same index twice in a row
    do {
        randomIndex = Math.floor(Math.random() * compliments.length);
    } while (randomIndex === lastIndex);

    // Update the last index
    lastIndex = randomIndex;

    // Update the UI with a simple fade-out effect via JS (optional)
    complimentText.style.opacity = 0;

    setTimeout(() => {
        complimentText.textContent = compliments[randomIndex];
        complimentText.style.opacity = 1;
    }, 150);
}

// 3. Add Event Listener to the button
generateBtn.addEventListener('click', getNewCompliment);

// Initial setup to ensure the UI feels responsive
complimentText.style.transition = "opacity 0.2s ease";