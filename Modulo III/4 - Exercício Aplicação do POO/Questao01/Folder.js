const Document = require('./Document');

class Folder {
  constructor() {
    this.documents = [];
  }


  addDocument(document) {
    this.documents.push(document);
  }

  removeDocument(id) {
    this.documents = this.documents.filter(document => document.id !== id);
  }


  sortDocuments() {
    this.documents.sort((a, b) => a?.compare(b));
  }


  displayDocuments() {
    console.log(this.documents);
  }
}
module.exports = Folder;