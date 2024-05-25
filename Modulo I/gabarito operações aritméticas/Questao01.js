/*
 * Questão  1 - Calcule a raiz quadrada de uma número.
 * O usuário informará um número X e você retornará a raiz quadrada desse número0
 * Lembre-se que  √X = X½
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
    const number = await input('Inform a number: ');
    const sqrt = Number(number) ** (0.5)
    console.log('The Square root of',number,'is', sqrt);
    process.exit();
}

main(); 