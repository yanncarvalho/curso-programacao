/*
 * Questão 2 - Calcule as informações de uma circunferência.
 * O usuário informará o raio da circunferência e o programa retornará: 
 * - o comprimento (C = 2 · π · r)
 * - a área (A = π · r²)
 * - o diâmetro (d = 2 · r)
 * Obs.: use o comando Math.PI para retornar o valor de pi
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
    const radius = await input('Inform a radius: ');

    const diameter =  Number(radius) * 2
    const length =  diameter * Math.PI;
    const area = (Number(radius) ** 2) * Math.PI 

    console.log('The circumference length is', length); 
    console.log('The circumference area is', area);
    console.log('The circumference diameter is', diameter);
    process.exit();
}

main();