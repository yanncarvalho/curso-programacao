/*
 * Questão 4 - Faça um programa que inverta um número de 3 dígitos.
 * O usuário digitará um número e você retornará ele invertido, 
 * ex.: ao usuário digitar '123' o resultado deve ser '321'
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
    const numberStr = await input('Inform a number: ');
    // covert number String in Number
    const number = Number(numberStr)

    const lastDigit = number % 10
    const middleDigit = (number % 100 - lastDigit)/10
    const firstDigit = (number - (number % 100))/100 

    const invertedNumber  = (lastDigit * 100) + (middleDigit * 10) + firstDigit

    console.log('The Inverted number is', invertedNumber);
    process.exit();
}

main();