'use strict';

const HANGMAN = (function (newWord) {
  const guessOutput = document.querySelector('#word');
  const guessRemaining = document.querySelector('#guesses');
  const outputStatus = document.querySelector('#guessedChars');
  const newGame = document.querySelector('#newGame');
  const slide = document.querySelector('#slider');
  const p = document.querySelector('#emoji');

  newGame.textContent = 'Start';
  // p.textContent = 'Easy 🙂';
  
  let game;

  // const start
  // const game1 = new newWord('cat', 2);
  // const game2 = new newWord('New Jersey', 4);

  const render = () => {
    guessOutput.textContent = game.puzzle;
    guessRemaining.textContent = game.statusMsg;
    outputStatus.textContent = game.guessedChars.join(',');
  }
  
  const startGame = async () => {
    const word = await getWord(1);
    game = new newWord('cat', word.length > 3 ? 2 : 5);
    newGame.textContent = 'New Game';
    render();
    console.clear();
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
    p
  }
})(HANGMAN_METHODS);

HANGMAN.newGame.addEventListener('click', HANGMAN.startGame);

// HANGMAN.slide.addEventListener('input', (e) => {
//   let value = 0;
//   switch(e.target.value) {
//     case '2':
//       HANGMAN.p.textContent = 'Medium 😐';
//       value = parseInt(e.target.value);
//       break;
//     case '3':
//       HANGMAN.p.textContent = 'Hard 😓';
//       value = parseInt(e.target.value);
//       break;
//     default:
//       HANGMAN.p.textContent = 'Easy 🙂';
//       value = parseInt(e.target.value);
//   }
// })

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//   alert('This is just a demo using vanilla JS, not for mobile use');
// }