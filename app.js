'use strict';

const HANGMAN = (function () {
  const guessOutput = document.querySelector('#word');
  const guessRemaining = document.querySelector('#guesses');
  const outputStatus = document.querySelector('#guessedChars');
  const game1 = new Hangman('cat', 2);
  const game2 = new Hangman('New Jersey', 4);

  return {
    game1,
    game2,
    guessOutput,
    guessRemaining,
    outputStatus
  }
})();

window.onload = () => {
  HANGMAN.guessOutput.textContent = HANGMAN.game2.puzzle;
  HANGMAN.guessRemaining.textContent = 'Type a letter each time and make a guess!';
}

window.document.addEventListener('keypress', (e) => {
  HANGMAN.game2.makeGuess(String.fromCharCode(e.keyCode))
  HANGMAN.guessOutput.textContent = HANGMAN.game2.puzzle;
  // console.log(HANGMAN.game2);
  HANGMAN.guessRemaining.textContent = HANGMAN.game2.statusMsg;
  HANGMAN.outputStatus.textContent = HANGMAN.game2.guessedChars.join(',');
});
