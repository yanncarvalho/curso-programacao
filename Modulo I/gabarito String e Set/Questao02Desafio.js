/*
 * Questão 2. Escreva uma função que verifique se uma palavra é um palíndromo, somente considere caracteres da língua inglesa. Um palíndromo é uma palavra, frase, número ou qualquer outra sequência de caracteres que permanece igual quando lida de trás para frente.
 * Observação: sua função deve ser case insensitive (tratar maiusculas e minusculas igualmente) 
 * Exemplos de palíndromos: “racecar”, “madam" , "Wassamassaw"
 * Desafio: faça com que a função funcione com frases  
 * Ex:”Was it a car or a cat I saw”" A man, a plan, a canal, Panama!” .
*/

function isPalindromo(str) {
    const arr = str.toUpperCase().split('').filter(e => e >= 'A' && e <= "Z");
    return arr.toString() === arr.reverse().toString();
}

console.log(isPalindromo('A man, a plan, a canal, Panama!'));