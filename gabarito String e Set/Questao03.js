/**
 * Questão 3. Escreva uma função em uma linguagem de programação de sua escolha chamada capitalize, que recebe uma string como entrada e retorna a mesma string com a primeira letra de cada palavra em maiúscula. 
 * Somente considere caracteres da língua inglesa e que entre cada palavra somente haverá um espaço em branco, não há ponto, vírgula ou outros caracteres.
 * Por exemplo:
 * Se a entrada for 'hello world', a função deve retornar 'Hello World'.
 * se a entrada for “hELLO WORLD” a função deve retornar “Hello World” 
 */

function capitalize(str) {
    let capitalizedStr = '';
    let isFirstLetter = true;

    for (let i = 0; i < str.length; i++) {
        const character = str[i];

        if (character === ' ') {
            isFirstLetter = true;
            capitalizedStr += ' ';
            continue;
        }

        if (isFirstLetter) {
            isFirstLetter = false;
            capitalizedStr += character.toUpperCase();
        } else {
            capitalizedStr += character.toLowerCase();
        }

    }

    return capitalizedStr;
}
console.log(capitalize("hello world"));
console.log(capitalize("hELLO WORLD")); 
