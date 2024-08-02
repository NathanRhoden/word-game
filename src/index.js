const alphabetCheckRegex = /^[a-zA-Z]+$/;

let currentWord = "";
let currentSquare = 0;
let letterCount = 0; 

window.addEventListener("keydown", (event) => {
  const pressedKey = event.key;

 
    if (alphabetCheckRegex.test(pressedKey) && pressedKey.length === 1) {
      document.getElementById(currentSquare.toString()).innerHTML = pressedKey.toUpperCase();
  
      appendLetterToWord(pressedKey.toUpperCase());
  
    } else if (pressedKey == "Backspace" && currentSquare > 0 ) {
      removeLetterFromWord();
    }

  
});

function appendLetterToWord(letter) {
  currentWord = currentWord.concat(letter);
  currentSquare++;  
  console.log(currentWord);
}

function removeLetterFromWord() {
  currentSquare--;
  document.getElementById(currentSquare.toString()).innerHTML = " ";
  currentWord = currentWord.substring(0, currentWord.length - 1);
  console.log(currentWord);
}

