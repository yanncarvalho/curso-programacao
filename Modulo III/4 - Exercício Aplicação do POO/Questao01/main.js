const Document = require('./Document');
const Folder = require('./Folder');

const doc1 = new Document("A", "Conteúdo sobre A");
const doc2 = new Document("b1", "Conteúdo sobre B1");
const doc3 = new Document("B2", "Conteúdo sobre B2");

const folder = new Folder();
folder.addDocument(doc3);
folder.addDocument(doc2);
folder.addDocument(doc1);
console.log(folder);

folder.removeDocument(1);
console.log(folder);

folder.sortDocuments();
console.log(folder);