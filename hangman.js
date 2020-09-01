
class Hangman {
  constructor(word, guessesLeft) {
    this.word = word.toLowerCase().split('');
    this.guessedChars = [];
    this.guessesLeft = guessesLeft;
    this.gameStatus = 'playing';
  }

  getPuzzle() {
    return this.word.map(char => {
      //! char === loop through this.guessChars and join as str so: 'c' === ['c'].join('') => 'c' === 'c'
      if (this.guessedChars.includes(char) || char.includes(' ')) {
        return char;
      } else {
        return '*';
      }
    }).join('');
  }

  calculateStatus() {
    this.word.forEach(char => {
      if (this.guessedChars.includes(char)) {
        this.gameStatus = 'finished';
      } else if (this.guessesLeft > 0) {
        this.gameStatus = 'playing';
      } else {
        this.gameStatus = 'failed';
      }
    });
    console.log(this.gameStatus);
  }

  makeGuess(char) {
    let guess = char.toLowerCase();
    let isGuessUnique = !this.guessedChars.includes(guess);
    let isPlaying = this.gameStatus == 'playing';
    // if char exists in guessArr then ignore
    if (isGuessUnique && this.guessesLeft > 0) {
      // add if char matches otherwise add incorrect guess and subtract by 1
      if (this.word.includes(guess)) {
        this.guessedChars.push(guess);
        // only make guesses if the game is in progress
      } else if (!this.word.includes(guess) && isPlaying) {
        this.guessedChars.push(guess);
        this.guessesLeft--;
      }
    }
    this.calculateStatus();
  }

  gameProgress() {
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
}