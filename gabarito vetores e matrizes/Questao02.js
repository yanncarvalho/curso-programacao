/**
 * Questão 02 - Informado duas matriz 4x2 verifique se elas são iguais, 
 * considera-se iguais, aquelas que todos os valores nas mesmas posições são iguais.
 */

const matrix1 = new Array(4).fill(new Array(2)).map(a => a = a.fill(0).map(e => e = Math.floor(Math.random() * 100)));
const matrix2 = new Array(4).fill(new Array(2)).map(a => a = a.fill(0).map(e => e = Math.floor(Math.random() * 100)));

let isEqual = matrix1.length === matrix2.length;

for (let i = 0; isEqual && i < matrix1.length; i++) {
  const arr1 = matrix1[i];
  const arr2 = matrix2[i];
  isEqual = arr1.length === arr2.length;
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] !== arr2[j]) {
      isEqual = false;
      break;
    }
  }
}

console.log(isEqual ? 'Matrixes are equals' : 'Matrixes are not equals');
