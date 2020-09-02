'use strict';
// methods for hangman game resides
const HANGMAN_METHODS = (function() {
  class Hangman {
    constructor(word, guessesLeft) {
      this.word = word.toLowerCase().split('');
      this.guessedChars = [];
      this.guessesLeft = guessesLeft;
      this.gameStatus = 'playing';
    }

    get puzzle() {
      return this.word.map(char => {
        //! char === loop through this.guessChars and join as str so: 'c' === ['c'].join('') => 'c' === 'c'
        if (this.guessedChars.includes(char) || char.includes(' ')) {
          return char;
        } else {
          return '*';
        }
      }).join('');
    }

    get statusMsg() {
      const isFinished = this.gameStatus === 'finished';
      const isPlaying = this.gameStatus === 'playing';
      let output = '';

      if (isPlaying) {
        output = `Remaining guess${this.guessesLeft < 1 ? '' : 'es'}: ${this.guessesLeft}`;
      } else if (isFinished) {
        output = 'Well done!';
      } else {
        output = `Nice try, the word was ${this.word.join('')}`;
      }
      return output;
    }

    calculateStatus() {
      const str  = this.word.filter(x => x != ' ');
      const chars = str.filter(x => this.guessedChars.includes(x)).join('');
      if (chars == str.join('')) {
        this.gameStatus = 'finished';
      } else if (this.guessesLeft == 0) {
        this.gameStatus = 'failed';
      } else if (this.guessesLeft > 0 ) {
        this.gameStatus = 'playing';
      }
      console.warn('FOR DEBUGGIN: ' , this);
    }

    makeGuess(char) {
      let guess = char.toLowerCase();
      let isGuessUnique = !this.guessedChars.includes(guess);
      let isPlaying = this.gameStatus == 'playing';
      // if char exists in guessArr then ignore
      if (isGuessUnique && isPlaying) {
        // add if char matches otherwise add incorrect guess and subtract by 1
        if (this.word.includes(guess)) {
          this.guessedChars.push(guess);
          // only make guesses if the game is in progress
        } else if (!this.word.includes(guess)) {
          this.guessedChars.push(guess);
          this.guessesLeft--;
        }
      }
      this.calculateStatus();
    }
  }
  return Hangman;
})();
