/**
 * Questão 3 - Escreva um algoritmo que calcule o número fatorial; 
 * faça um algoritmo que leia um valor inicial A e imprima o resultado de A! 
 * Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 
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
    let total = number;
    for(let  i = 2; i < number; i++ ){
        total *= i; 
    }
    console.log(number+'! = '+total);
    process.exit();
}

main();