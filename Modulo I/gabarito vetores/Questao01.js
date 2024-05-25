/**
 * Questão 1 - Dado um vetor de inteiros M, ao ser informado um número N,
 * retorne o índice de da ocorrência do primeiro de N no vetor M, 
 * caso o número não seja encontrado imprima -1
 */
function input(message) {
    return new Promise((resolve, _) => {
        process.stdout.write(message);

        process.stdin.setEncoding('utf8');

        process.stdin.on('data', (data) => {
            resolve(data.trim());
        });

        process.stdin.on('close', () => resolve(null));
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
    const numberStr = await input('Inform a number: ');

    const number = Number(numberStr);

    const length = array.length
    let i; 
    for (i = 0; i < length; i++) {
        if (array[i] == number) {
            break;
        }

    }

    console.log(array, 'first ocurrence of', number, 'is', (i === length) ? -1 : i);



    process.exit();
}

main(); 