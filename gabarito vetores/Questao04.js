/**
 * Dado um vetor de inteiros M, inverta a ordem dos seus elementos. 
 * Ex.: M = [0, 1, 2, 3, 4]
 * RESULTADO:  M = [4, 3, 2, 1, 0] 
 */


const array = new Array(Math.floor(Math.random() * 10) + 10).fill(0).map(e => e = Math.floor(Math.random() * 100));
console.log('array', array)
let lastElement = array.length - 1;

for (let i = 0, j = lastElement; i < j; i++, j--) {
    let aux = array[j];
    array[j] = array[i];
    array[i] = aux;
}
console.log('new Array', array);
