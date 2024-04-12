/*
 * Questão 2 - Use o comando abaixo para gerar um vetor com números aleatórios
 * new Array(Math.floor(Math.random()*10)+10).fill(0).map( e => e = Math.floor(Math.random()*100)); 
 * usando os métodos do vetor, filtre todos os elementos do vetor que não são pares, 
 * depois retorne um novo vetor multiplicando os números por dois.
 */
const arr = new Array(Math.floor(Math.random()*10)+10).fill(0).map( e => e = Math.floor(Math.random()*100));

console.log(arr);
const newArr = arr.filter(e => e % 2 === 0).map( e => e*2);
console.log(newArr);