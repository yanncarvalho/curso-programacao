/*
 * Questão 1 - Usando recursividade, faça um algoritmo que calcule o número fatorial; 
 * faça um algoritmo que leia um valor inicial A e imprima o resultado de A! 
 * Ex: 5! = 5 * 4 * 3 * 2 * 1 = 120
 */
function factorial(num) {
    if (num <= 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}
