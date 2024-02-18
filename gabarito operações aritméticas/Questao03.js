/*
 * Questão 3 - Faça um conversor de Fahrenheit para Celsius.
 * O usuário informará a temperatura em Fahrenheit e você retornará em Celsius.
 * Lembre-se que C = (F - 32)/1,8
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
    const fahrenheit = await input('Inform a temperature in Fahrenheit: ');
    const celsius = ( Number(fahrenheit) - 32)/1.8
    console.log('The temperature in Celsius is', celsius);
    process.exit();
}

main();