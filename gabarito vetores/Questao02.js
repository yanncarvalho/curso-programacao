/**
 * Questão 2 - Dado um vetor de inteiros M, 
 * ao ser informado dois inteiros, N e P, 
 * representando respectivamente posição inicial e final, 
 * imprima um novo vetor que possuirá os elementos de M no intervalo N a P. 
 * Ex.: M = [0, 1, 2, 3, 4]; N = 1, P = 3
 * RESULTADO: [1, 2, 3]
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
    const array = new Array(Math.floor(Math.random() * 10) + 10).fill(0).map(e => e = Math.floor(Math.random() * 100));
    console.log(array)
    const firstPosition = await input('Inform 1# position: ');
    const lastPosition  = await input('Inform 2# position: ');

    const first = Number(firstPosition);
    const limit = Number(lastPosition);
    const newArray = [];

    for (let i = first, j = 0; i < limit; i++, j++) {
        newArray[j] = array[i];
    }

    console.log('new Array',newArray);

    process.exit();
}

main();