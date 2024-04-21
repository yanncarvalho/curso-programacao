/*
 * Questão 1 - Crie um Set de tamanho aleatório com elementos gerados aleatoriamente.
 */

function genRandomInteger() {
    return Math.trunc(Math.random() * 101);
}
const arr = new Array(genRandomInteger() + 1).fill(0).map(() => genRandomInteger())

const set = new Set(arr);
console.log(set);