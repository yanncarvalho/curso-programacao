/**
 * Questão 6 - Faça um algoritmo  que receba um número N e exiba quantos números primos existem entre 2 e N.
 * Lembre-se que número primo é aquele que só divisível por 1 e por ele mesmo
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
    let count = 0
    for(let i = 2; i <= number; i++){
        
        let isPrime = true;

        for (let j = i-1; j > 1; j--){
            if (i % j === 0 ) {
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            count++;
        }
    } 
    console.log(count,'prime numbers');
    process.exit();
}

main();