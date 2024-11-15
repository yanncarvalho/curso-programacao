/*Questão 3. Crie uma classe chamada Duple que, ao ser inicializada, receberá dois elementos de tipo primitivo. 
Esses elementos devem ser imutáveis, ou seja, não poderão ser alterados após a criação da instância. 
Além disso, a classe deve conter um método para comparar a instância atual com outra dupla, 
verificando se ambos os elementos são iguais ou não. lembre-se: (a1,a2) ≠ (a2,a1)*/
const Duple = require('./Duple');

const duple1 = new Duple(1, 'A');
const duple2 = new Duple(1, 'A');
const duple3 = new Duple('A', 1);

console.log(duple1.equals(duple2)); // Should return true
console.log(duple1.equals(duple3)); // Should return false
