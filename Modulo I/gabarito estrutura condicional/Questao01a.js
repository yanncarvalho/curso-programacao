/*
 * Questão 01 - Faça um programa que informa se um número e par ou ímpar 
 * Lembre-se:
 * ∀ n ∈ IN;n resto 2=0;n é par
 * ∀ n ∈ IN;n resto 2=1;n é ímpar
 * 
 * a) Refatore* o programa, trocando a estrutura if-else por operador ternário 
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
    const result = (number % 2 === 0) ? 'even' : 'odd';

    console.log(number+' is '+result)
    
    process.exit();
}

main();