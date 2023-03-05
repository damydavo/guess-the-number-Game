const randomNumber = Math.floor(Math.random() * 100) + 1
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')

const guessField = document.querySelector('.guessField')
const guessSubmit = document.querySelector('.guessSubmit')

let guessCount = 1;
let resetButton;

const checkGuess = () => {
    const userGuess = Number(guessField.value)
    if(guessCount === 1) {
       guesses.textContent = 'previous guesses: ';
    }

    guesses.textContent += ` ${userGuess}`
    // guesses.classList.add = 'block'
    
    if(lastResult === randomNumber) {
        lastResult.textContent = 'Congratulations you guess right'
        lastResult.style.backgroundColor = 'green'
        lowOrHigh.textContent = ''
        setGameOver()
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!Gameover!!!'
        lowOrHigh.textContent = ''
        setGameOver();
    } else {
        lastResult.textContent = '!Wrong!'
        lastResult.style.backgroundColor = 'Red'
         
        if(userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was too low'
        } else if(userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last guess was too high'
        }
    }
    guessCount++
    guessField.value = ''
    guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)

const setGameOver = () => {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'Start new game'
    resetButton.classList.add = 'btn'
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame)

}

const resetGame = () => {
    guessCount = 1

    const resetParas = document.querySelectorAll('.resultParas p');
    for(let resetPara of resetParas) {
        resetPara.textContent = ''
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ''
    guessField.focus()

    lastResult.style.backgroundColor = 'White';


}