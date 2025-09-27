const readline = require('readline');
const Food = require('./Food')
const Worm = require('./Worm')
class Board {
    static DIRECTIONS = {
        '\u001B[A': { x: 0, y: -1 }, // Up
        '\u001B[B': { x: 0, y: 1 },  // Down
        '\u001B[D': { x: -1, y: 0 }, // Left
        '\u001B[C': { x: 1, y: 0 },  // Right
    };

    constructor(size) {
        this.boardSize = size;
        this.currVelocity = 200;
        this.currDirection;
        this.interval;
        this._boardMatrix = this.createEmptyMatrix();
        this.worm = new Worm();
        this.score = 0;
        this.food = new Food(this.worm.positions, this.boardSize);
        this._render = this._render.bind(this);
        this.initInput();
    }


    createEmptyMatrix() {
        return Array.from({ length: this.boardSize }, () => Array(this.boardSize).fill('.'));
    }

    initInput() {
        readline.emitKeypressEvents(process.stdin);
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
        }
        process.stdin.on('keypress', (str, key) => this.handleInput(key));
    }

    startGame() {
        this.interval = setInterval(this._render, this.currVelocity)
    }
   
    _render() {
        console.clear();
        console.log(`=== SNAKE GAME ===   Score: ${this.score}   Board Size: ${this.boardSize}x${this.boardSize}`);
        console.log('-'.repeat(this.boardSize * 2));
        this._boardMatrix = this.createEmptyMatrix();
        if(this.currDirection){
            this.worm.move(this.currDirection)
        }

        if (this.worm.hasWormDied(this.boardSize)) {
            this.gameOver()
        }
  
        for (const pos of this.worm.positions) {
            this._boardMatrix[pos.y][pos.x] = this.worm.drawSymbol();
        }

        this._boardMatrix[this.food.position.y][this.food.position.x] = this.food.drawSymbol();
        for (const row of this._boardMatrix) {
            console.log(row.join(' '));
        }

        if (this.worm.tryEat(this.food)) {
            this.score++;

        }

    }

    _increaseSpeed() {
        this.currVelocity -= 100
        clearInterval(this.interval);
        this.interval = setInterval(this._render, this.currVelocity);
    }


    handleInput(key) {
        if (key.ctrl && key.name === 'c') {
            process.exit();
        }
        this.currDirection = Board.DIRECTIONS[key.sequence] || this.currDirection;
    }

    gameOver() {
        console.log('WORM DIED!');
        process.exit();
    }
}
module.exports = Board;