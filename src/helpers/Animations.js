function animateKeyDown(squareNumber) {
    const currentSquare = document.getElementById(squareNumber);

    currentSquare.classList.add('animate');

    
    currentSquare.addEventListener('animationend', () => {
        currentSquare.classList.remove('animatereverse');
    }, { once: true })
}

function animateBackspace(squareNumber) {
    const currentSquare = document.getElementById(squareNumber - 1);
    currentSquare.classList.add('animatereverse');

    currentSquare.addEventListener('animationend', () => {
        currentSquare.classList.remove('animatereverse');
    }, { once: true })
}

export {animateKeyDown , animateBackspace}