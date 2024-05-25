/*
 * Questão 4.  Usando recursividade,  
 * faça um algoritmo que receba um número N e imprima se ele é um número primo.
 * Lembre-se que número primo é aquele que só é divisível por 1 e por ele mesmo; 
 * 1 não é considerado número primo.
*/
function isPrime(num, interator = num - 1) {
    if (num <= 1) {
        return false
    } else if (interator <= 1) {
        return true;
    } else {
        return num % interator != 0 && isPrime(num, interator - 1)
    }
}
