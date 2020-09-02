'use strict';

const HANGMAN = (function (newWord) {
  const guessOutput = document.querySelector('#word');
  const guessRemaining = document.querySelector('#guesses');
  const outputStatus = document.querySelector('#guessedChars');
  const newGame = document.querySelector('#newGame');
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
    game = new newWord(word, 5);
    render();
  }

  document.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.keyCode);
    game.makeGuess(guess);
    render();
  });

  console.log(document);
  return {
    game,
    guessOutput,
    guessRemaining,
    outputStatus,
    startGame,
    newGame,
    render,
  }
})(HANGMAN_METHODS);

HANGMAN.newGame.addEventListener('click', HANGMAN.startGame);