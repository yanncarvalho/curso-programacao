/*
 * Questão 5 - Faça um programa que calcula quantos dígitos tem um número.
 * O usuário informará um número e deverá ser retornado quantos dígitos esse número tem.
 * Considere a fórmula :
 * Número de dígitos =  ⌊log10 n⌋ + 1
 * Use a função Math.log10(variável) para calcular o log de base 10 e 
 * a função Math.floor(variável) para arredondar para baixo (⌊  ⌋)
 */
function input(message) {
    return new Promise((resolve, _) => {
        process.stdout.write(message);

        process.stdin.setEncoding('utf8');

        process.stdin.on('data', (data) => {
            resolve(data.trim()); 
        });

        process.stdin.on('close', () => resolve(null) );
    }).then((result) => {
        return result;
    })
    .catch((error) => {
        return null;
    });
}

async function main() {
    const number = await input('Inform a number: ');
    const numberLog10 = Math.log10(Number(number)) 
    const numberOfDigits = Math.floor(numberLog10 + 1)

    console.log(number,'has', numberOfDigits, 'digits');
    process.exit();
}

main();