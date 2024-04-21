/*
 * Questão 4. Você já ouviu falar da cifra de César, um método de criptografia utilizado desde a época de Júlio César? Essa técnica envolve deslocar cada letra de uma mensagem por um número fixo de posições no alfabeto. Por exemplo, com um deslocamento de 3 posições, 'A' se tornaria 'D', 'B' se tornaria 'E', e assim por diante.
 * Exemplo com deslocamento 13:
 * Crie duas funções, encrypt e decrypt, ambas receberão dois parâmetros: uma string representando uma mensagem e um number representando o deslocamento. Siga as seguintes regras: 
 - Na roma antiga não existia letra minúsculas, logo, no encrypt  transforme todos os caracteres em maiúsculo antes de criptografar;
 - O número de deslocamento deve ser gerado aleatoriamente e será entre 1 e 100;
 - Somente criptografe letras, não criptografe espaço em branco, pontuação e outros caracteres;
 - Somente considere caracteres da língua inglesa;
 - Note que após o Z o deslocamento deve voltar para o começo do alfabeto, assim, a letra Z com deslocamento 2 será equivalente a B;
* Dica: use os métodos da string chartCodeAt (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) e 
* fromCharCode (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) 
* para converter a string em seu código ASCII e desconverte-lo, respectivamente
* Lembre-se que A é código ASCII 65 e Z é código 90
*/
function encrypt(message, key) {
    const msgUpper = message.toUpperCase()
    let encryptedMessage = '';
    for (let i = 0; i < msgUpper.length; i++) {
        const charCode = msgUpper.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            const encryptedCharCode = ((charCode - 65 + key) % 26) + 65;
            encryptedMessage += String.fromCharCode(encryptedCharCode);
        } else {
            encryptedMessage += msgUpper[i];
        }
    }
    return encryptedMessage;
}

function decrypt(message, key) {

    let decryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        const charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            const decryptedCharCode = ((charCode + 65 - key) % 26) + 65
            decryptedMessage += String.fromCharCode(decryptedCharCode);
        } else {
            decryptedMessage += message[i];
        }
    }
    return decryptedMessage;
}

const key = Math.floor(Math.random() * 100) + 1;

const msgOriginal = "This is a secret message";
console.log("Original message:", msgOriginal);

const msgEncrypt = encrypt(msgOriginal, key);
console.log("Encrypted message:", msgEncrypt);

const msgDecrypt = decrypt(msgEncrypt, key);
console.log("Decrypted message:", msgDecrypt);

