
class Position {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }


    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    equals(other){
        return other && this.x === other.x && this.y === other.y;
    }

    clone(){
        return new Position(this.x, this.y)
    }

    static initPosition() { return new Position(0, 0) }
}
module.exports = Position;
