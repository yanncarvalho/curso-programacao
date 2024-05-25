/**
 * Questão 2.Faça um programa que implemente um menu onde o usuário deverá selecionar 1 ou 0. 
 * Caso seja encontrado um número diferente, o programa deverá solicitar uma nova opção. 
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
    let op
    do{
       op =  await input('Inform an option (1 or 0 only): ');
    }while(op !== '1' && op !== '0');

    console.log("you've chosen a correct option!")
 

    process.exit();
}

main();