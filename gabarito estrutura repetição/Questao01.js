/*
 * Questão 01 - Usando o laço while faça um programa que receba um número N exiba 
 * a tabuada de de 1 a 10 de N. 
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
    const numberStr = await input('Inform a number: ');
    const number = Number(numberStr) 
    let i = 1;
    while(i <= 10){
        console.log(number,'X',i,'=',number*i)
        i++
    }
    process.exit();
}

main();