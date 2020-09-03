'use strict';

const HANGMAN = (function (newWord) {
  const guessOutput = document.querySelector('#word');
  const guessRemaining = document.querySelector('#guesses');
  const outputStatus = document.querySelector('#guessedChars');
  const newGame = document.querySelector('#newGame');
  const slide = document.querySelector('#slider');
  const p = document.querySelector('#emoji');

  newGame.textContent = 'Start';
  p.textContent = 'Easy 🙂';
  slide.value = '1';
  let game;

  // const start
  // const game1 = new newWord('cat', 2);
  // const game2 = new newWord('New Jersey', 4);

  const render = () => {
    guessOutput.textContent = game.puzzle;
    guessRemaining.textContent = game.statusMsg;
    outputStatus.textContent = game.guessedChars.join(',');
  }
  
  const startGame = async (wordCount) => {
    const word = await getWord(parseInt(wordCount));
    console.log('curr word count' ,wordCount);
    game = new newWord(word, wordCount > 1 ? 4 : 6);
    newGame.textContent = 'New Game';
    render();
    // console.clear();
  }
  // increase word count based on slider difficulty e.g. 1 = word, 2 = word.
  // pass slider value to api to increase word count
  const difficultyOption = (value) => {
    let currVal = parseInt(value);
    switch (currVal.toString()) {
      case '1':
        p.textContent = 'Easy 🙂';
        currVal = parseInt(value);
        break;
      case '2':
        p.textContent = 'Medium 😐';
        currVal = parseInt(value);
        break;
      case '3':
        p.textContent = 'Hard 😓';
        currVal = parseInt(value);
        break;
      default:
        p.textContent;
        currVal;
    }
    return currVal;
  }

  document.addEventListener('keypress', (e) => {
    if (!game) {
      alert('You havent started a game yet!')
    } else {
      const guess = String.fromCharCode(e.keyCode);
      game.makeGuess(guess);
    }
    render();
  });
  
  return {
    game,
    guessOutput,
    guessRemaining,
    outputStatus,
    startGame,
    newGame,
    render,
    slide,
    difficultyOption,
  }
})(HANGMAN_METHODS);

window.onload = () => {
  HANGMAN.slide.value = '1';
}

HANGMAN.newGame.addEventListener('click', (e) => {
  HANGMAN.startGame(HANGMAN.difficultyOption(HANGMAN.slide.value))
});

HANGMAN.slide.addEventListener('input', (e) => {
  HANGMAN.difficultyOption(e.target.value);
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert('This is just a demo using vanilla JS, not for mobile use');
}