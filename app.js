// step-1 : add a hidden class
// step-2 : remove a class

// function play() {

//     const homeScene = document.getElementById('home');
//     homeScene.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//      playGround.classList.remove('hidden');

// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escaped') {
        gameOver();
    }




    const currentAlphabetElement = document.getElementById('current-letter');
    const targetAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = targetAlphabet.toLowerCase();

    if (playerPressed === expectedAlphabet) {

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;
        // --------------------------------------------
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        removeBgColorById(expectedAlphabet);
        continueGame();
    } else {
        // const lifeScoreElement = document.getElementById('life-score');
        // const lifeScoreText = lifeScoreElement.innerText;
        // const lifeScore = parseInt(lifeScoreText);
        // const remainLife = lifeScore - 1;
        // lifeScoreElement.innerText = remainLife;
        // ------------------------------------------------
        const lifeScore = getTextElementValueById('life-score');
        const remainLife = lifeScore - 1;
        setElementValueById('life-score', remainLife);

        if (remainLife === 0) {
            gameOver();
        }

    }
}




document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    // set an alphabet and show display
    const currentAlphabet = document.getElementById('current-letter');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);

}

function play() {
    hideElementById('home');
    hideElementById('score');
    showElementById('play-ground');
    setElementValueById('life-score', 5);
    setElementValueById('current-score', 0);
    continueGame();

}
function gameOver() {
    hideElementById('play-ground');
    showElementById('score');
    const lastScore = getTextElementValueById('current-score');
    setElementValueById('play-score',lastScore);
    const currentLetter = getElementTextById('current-letter');
    removeBgColorById(currentLetter);
}