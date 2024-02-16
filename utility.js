function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
    
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
    
}

function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function getTextElementValueById(elementId) {
    const element =  document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId , value) {
    const element =  document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element =  document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabetLetter =  alphabets[index];
    return alphabetLetter;
    
}




