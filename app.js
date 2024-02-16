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
    const currentAlphabetElement = document.getElementById('current-letter');
     const targetAlphabet = currentAlphabetElement.innerText 
     const expectedAlphabet = targetAlphabet.toLowerCase();

     if (playerPressed === expectedAlphabet) {

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        removeBgColorById(expectedAlphabet);
        continueGame();
     } else {
        const lifeScoreElement = document.getElementById('life-score');

        // console.log(lifeScoreElement);

        const lifeScoreText = lifeScoreElement.innerText;
        const lifeScore = parseInt(lifeScoreText);
        const remainLife = lifeScore - 1;
        lifeScoreElement.innerText = remainLife;
        
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
    showElementById('play-ground');
    continueGame();
    
}