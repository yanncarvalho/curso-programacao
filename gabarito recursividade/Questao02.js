/*
 * Questão 2.  Usando recursividade faça um programa que receba 
 * um número N e retorne true se N é potência de 3, ou seja, N = 3^X
 * Lembre-se que 3^0 = 1
*/

function isPowerOfThree(n) {
    if (n == 1) {
        return true;
    } else if (n < 3) {
        return false;
    } else {
        return n % 3 === 0 && (n === 3 || isPowerOfThree(n / 3))
    }

}