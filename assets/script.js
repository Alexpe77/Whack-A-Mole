const holes = document.querySelectorAll('.hole');
const scoreElement = document.querySelector('#score');
const timeElement = document.querySelector('#time');
const startBtn = document.querySelector('#start');

let score = 0;
let time = 10;
let currentPos;

// Check if a mole is there and update the score if it is
holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (parseInt(hole.getAttribute('id'))=== currentPos) {
            score++;
            scoreElement.innerHTML = score;
        }
    })
});

// Add eventlistener to the start button
startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => {
        // Create a loop until time's up
        // Then empty all holes at the start
        holes.forEach(hole => {
            hole.innerHTML = '';
        });

        // Fill a random hole by adding a new mole div
        currentPos = Math.floor(Math.random() * 12);
        holes[currentPos].innerHTML = '<div class="mole"></div>';

        // Check if time's up
        time--;
        timeElement.innerHTML = time;

        if (time === 0) {
            clearInterval(startGame); // Stop the loop
            setTimeout (() => {
            alert('Congratulations, all the moles are gone !');
            }, 100);
        }
    }, 1000);
}
