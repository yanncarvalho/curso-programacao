/*
 * Questão 3 - Crie um programa que recebe um número de 1 a 12 e escreve o mês equivalente; 
 *  caso seja digitado um valor fora desse intervalo retorne uma mensagem de erro.
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
    const month = await input('Inform a number: ');
    switch(Number(month)){
        case(1): console.log('The month is January');
        break;
        case(2): console.log('The month is February');
        break;
        case(3): console.log('The month is March');
        break;
        case(4): console.log('The month is April');
        break;
        case(5): console.log('The month is May');
        break;
        case(6): console.log('The month is June');
        break;
        case(7): console.log('The month is July');
        break;
        case(8): console.log('The month is August');
        break;
        case(9): console.log('The month is September');
        break;
        case(10): console.log('The month is October');
        break;
        case(11): console.log('The month is November');
        break;
        case(12): console.log('The month is December');
        break;
        default: console.log('Invalid number');
    }
    process.exit();
}

main();