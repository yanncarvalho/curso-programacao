/** 
 * Questão 3 - Dado um vetor de inteiros M, 
 * ao ser informado um número N, remova todas as ocorrências de N em M. 
 * Obs.: M não pode ficar com valores undefined 
 * Ex.: M = [0, 1, 2, 1, 4]; N = 1
 * RESULTADO:  M =[0, 2, 4]
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
    let array = new Array(Math.floor(Math.random() * 10) + 10).fill(0).map(e => e = Math.floor(Math.random() * 100));
    console.log(array)
    const numberStr = await input('Inform a number: ');
    const number = Number(numberStr);

    const newArray = [];
    for (let i = 0, j = 0; i < array.length; i++) {
        if(array[i] !== number){
            newArray[j] = array[i];
            j++;
        } 
    }
    array = newArray
    console.log('new Array',array);

    process.exit();
}

main();