class Folder {
  constructor() {
    this._documents = [];
  }


  addDocument(document) {
    this._documents.push(document);
  }

  removeDocument(id) {
    this._documents = this._documents.filter(document => document.id !== id);
  }


  sortDocuments() {
    this._documents.sort((a, b) => a?.compare(b));
  }
  
}
module.exports = Folder;