/**
 * Questão 2. No Brasil para ser candidato a cargos políticos deverá ter as seguintes idades:
 *   •	35 anos para presidente e vice-presidente da República e senador;
 *   •	30 anos governador e vice-governador de estado e do Distrito Federal;
 *   •	21 anos para deputado federal, deputado estadual ou distrital, prefeito, vice-prefeito;
 *   •	18 anos para vereador.
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
    const ageStr = await input('Inform your age: ');
    const age = Number(ageStr)
    if (age >= 35){
        console.log('You can be president, vice-president or senator')
    } else if (age >= 30){
        console.log('You can be governador, vice-governador ')
    } else if (age >= 21){
        console.log('You can be federal representative, state representative, or district representative')
    } else if (age >= 18){
        console.log('You can be city councilor')
    } else {
        console.log('You are underage')
    }
 
    process.exit();
}

main();