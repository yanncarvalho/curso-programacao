/**
 * Questão 3. Escreva uma função em uma linguagem de programação de sua escolha chamada capitalize, que recebe uma string como entrada e retorna a mesma string com a primeira letra de cada palavra em maiúscula. 
 * Somente considere caracteres da língua inglesa e que entre cada palavra somente haverá um espaço em branco, não há ponto, vírgula ou outros caracteres.
 * Por exemplo:
 * Se a entrada for “hello world“, a função deve retornar “Hello World“.
 * se a entrada for “hELLO WORLD” a função deve retornar “Hello World” 
 */
function capitalize(str) {
    return str.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(capitalize("hello world"));
console.log(capitalize("hELLO WORLD")); 
