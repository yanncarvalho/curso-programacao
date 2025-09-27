const Position = require('./Position');

class Worm {
    static DRAW_SYMBOL = '▆'

    constructor() {
        this._previousPos = Position.initPosition()
        this._positions = [Position.initPosition()]
    }

    grow() {
        this._positions.unshift(this._previousPos)
    }

    drawSymbol() {
        return Worm.DRAW_SYMBOL
    }

    get positions() {
        return this._positions;
    }

    get head() {
        return this._positions.at(-1);
    }

    tryEat(food) {
        if (this.head.equals(food.position)) {
            this.grow();
            food.eaten(this._positions);
            return true;
        }
        return false;
    }

    hasWormDied(limitSize) {
        const head = this.head;
        const hitWall = head.x < 0 || head.x >= limitSize ||  head.y < 0 || head.y >= limitSize;
        const positionWithoutHead = this._positions.slice(0, -1);
        const hitBody = positionWithoutHead.some(position => position.equals(head));
        return hitWall || hitBody;
    }

    move({ x, y }) {
        const pos = this._positions;
        this._previousPos = pos[0].clone();
        for (let i = 0; i < pos.length - 1; i++) {
            pos[i] = pos[i + 1].clone();
        }
        this.head.x =  this.head.x + x;
        this.head.y = this.head.y + y;
    }
}

module.exports = Worm;