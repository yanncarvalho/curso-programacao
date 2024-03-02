/**
 * Questão 4 - Faça um algoritmo que receba números até que o usuário positivos 
 * até que o usuário digite -1; escreva qual o maior e menor números positivos informados pelo usuário;
 * Lembre-se: o maior número inteiro positivo pode ser obtido com o comando Number.MAX_SAFE_INTEGER
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
    let number;
    let max = 0, min = Number.MAX_SAFE_INTEGER;
    do{
        let numberStr = await input('Inform a positive number (-1 to exit): ');
        if(numberStr === '-1'){
            break;
        }
     
        number = Number(numberStr)
        if(max < number){
            max = number;
        }

        if(min > number){
            min = number;
        }

    }while(true);  

    console.log('Minimium:', min, 'maximium: ', max);
    process.exit();
}

main();