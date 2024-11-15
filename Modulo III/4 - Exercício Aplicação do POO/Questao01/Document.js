class Document {
    static _nextId = 1;

    constructor(title, content) {
        this._id = Document._nextId++;
        this._title = title;
        this._content = content;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get content() {
        return this._content;
    }


    compare(document) {
        return this.title?.localeCompare(document?.title, { ignorePunctuation: true,  sensitivity: 'base'  });
    }

}

module.exports = Document;

