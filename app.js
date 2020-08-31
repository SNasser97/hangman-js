'use strict';

const HANGMAN = (function () {
  const guessOutput = document.querySelector('#word');
  const guessRemaining = document.querySelector('#guesses');
  const game1 = new Hangman('cat', 2);
  const game2 = new Hangman('New Jersey', 4);

  return {
    game1,
    game2,
    guessOutput,
    guessRemaining
  }
})();

window.onload = () => {
  HANGMAN.guessOutput.textContent = HANGMAN.game2.getPuzzle();
  HANGMAN.guessRemaining.textContent = 'Type a letter each time and make a guess!';
}
window.document.addEventListener('keypress', (e) => {
  HANGMAN.game2.makeGuess(String.fromCharCode(e.keyCode))
  HANGMAN.guessOutput.textContent = HANGMAN.game2.getPuzzle();
  console.log(HANGMAN.game2);
  HANGMAN.guessRemaining.textContent = HANGMAN.game2.gameProgress();
  document.querySelector('#guessedChars').textContent = HANGMAN.game2.guessedChars.join(',');

});

HANGMAN.game2.calculateStatus();