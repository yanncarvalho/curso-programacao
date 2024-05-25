/*
 * Questão 01 - Faça um programa que informa se um número e par ou ímpar 
 * Lembre-se:
 * ∀ n ∈ IN;n resto 2=0;n é par
 * ∀ n ∈ IN;n resto 2=1;n é ímpar
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
    .catch((_) => {
        return null;
    });
}

async function main() {
    const numberStr = await input('Inform a number: ');
    const number = Number(numberStr) 
    if (number % 2 === 0){
        console.log(number, 'is even');
    } else {
        console.log(number, 'is odd');
    }
    process.exit();
}

main();