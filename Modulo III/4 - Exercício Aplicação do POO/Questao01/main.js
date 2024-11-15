/*Questão 1. Crie uma classe chamada Document, que deve possuir as propriedades title, 
id (um número único gerado automaticamente, começando em 1 e incrementando a cada novo documento) e content. 
Em seguida, crie uma classe Folder, que permite adicionar novos documents, remover documents com base no id e ordenar os documents 
por título em ordem alfabética. 
ou seja, a classe Folder deve gerenciar os documents, oferecendo as funcionalidades de adição, remoção e ordenação conforme especificado.
*/
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