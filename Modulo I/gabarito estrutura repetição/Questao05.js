/**
 * Questão 5 - Faça um algoritmo que receba um número N e imprima se ele é um número primo
 * Lembre-se que número primo é aquele que só é divisível por 1 e por ele mesmo; 1 não é considerado número primo.
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
    
    const numberStr = await input('inform a number: ');
    const number = Number(numberStr);
    let isPrime = number > 1;
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    } 

    if(isPrime){
        console.log(number,'is a prime number');
    } else{
        console.log(number,'is not a prime number');
    }

    process.exit();
}

main();