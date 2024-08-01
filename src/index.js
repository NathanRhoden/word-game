const alphabetCheckRegex = /^[a-zA-Z]+$/;

window.addEventListener('keydown', (event) => {
    const pressedKey = event.key;
   
    console.log(typeof pressedKey);
    
    if (alphabetCheckRegex.test(pressedKey)) {
        document.getElementById('1').innerHTML = pressedKey.toUpperCase();
    }
});