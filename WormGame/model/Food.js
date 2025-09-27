const Position = require('./Position');

class Food {
    static DRAW_SYMBOL = '▣';

    constructor(usedPositions = [], limitSize) {
        this._limitSize = limitSize
        this._position = this._randomPosition(usedPositions);
    }

    get position() {
        return this._position;
    }

    drawSymbol() {
        return Food.DRAW_SYMBOL;
    }

    eaten(usedPositions = []) {
        this._position = this._randomPosition(usedPositions);
    }


    _randomPosition(usedPositions = []) {
        while (true) {
            const x = Math.floor(Math.random() * this._limitSize);
            const y = Math.floor(Math.random() * this._limitSize);
            if (!usedPositions.some(p => p.x === x && p.y === y)) {
                return new Position(x, y);
            }
        }
    }


}

module.exports = Food;


