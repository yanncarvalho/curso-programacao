class Duple {
    constructor(firstElement, secondElement) {
        this._firstElement = firstElement;
        this._secondElement = secondElement;
    }

    get firstElement() {
        return this._firstElement;
    }

    get secondElement() {
        return this._secondElement;
    }

    equals(otherDuple) {
        return this.firstElement === otherDuple?.firstElement && this.secondElement === otherDuple?.secondElement
    }
}

module.exports = Duple;