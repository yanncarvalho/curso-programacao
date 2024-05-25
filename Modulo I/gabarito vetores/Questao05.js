/**
 * Questão 5 - Dado um vetor de inteiros M, ordene os elementos de ordem crescente
 * M = [2, 4, 3, 100, 1, 0]
 * RESULTADO:  M = [0, 1, 2, 3, 4, 100] 
 */
const array = new Array(Math.floor(Math.random() * 10) + 10).fill(0).map(e => e = Math.floor(Math.random() * 100));
console.log('array', array)

// Bubble Sort
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }
}
console.log('new Array', array);
