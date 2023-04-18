class Hangman {
    constructor(word) {
        this.word = word.toLowerCase();
        this.incorrectGuesses = 0;
        this.correctGuesses = new Set();
    }

    guess(letter) {
        letter = letter.toLowerCase();
        if (this.correctGuesses.has(letter) || this.incorrectGuesses >= 6) return;
        if (this.word.includes(letter)) {
            this.correctGuesses.add(letter);
        } else {
            this.incorrectGuesses++;
        }
    }

    get status() {
        if (this.incorrectGuesses >= 6) return 'lost';
        if (this.word.split('').every(letter => this.correctGuesses.has(letter))) return 'won';
        return 'in progress';
    }

    get puzzle() {
        let puzzle = '';
        this.word.split('').forEach(letter => {
            if (this.correctGuesses.has(letter)) {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        });
        return puzzle;
    }
}

export default Hangman;

