/**
 * Questão 03 - Dada uma matriz  4x2, escreva um programa para calcular sua transposta. 
 * A transposta de uma matriz é obtida trocando suas linhas por colunas.
 */
const matrix = new Array(4).fill(new Array(2)).map(a => a = a.fill(0).map(e => e = Math.floor(Math.random() * 100)));
console.log('Matrix', matrix)

let matrixTransposed = []
const matrixLen = matrix.length;

for (let j = 0; j < matrix[0]?.length; j++) {
  const newArray = new Array(matrixLen);
  for (let i = 0; i < matrixLen; i++) {
    newArray[i] = matrix[i][j];
  }
  matrixTransposed[j] = newArray;
}

console.log('Matrix transposed', matrixTransposed)
