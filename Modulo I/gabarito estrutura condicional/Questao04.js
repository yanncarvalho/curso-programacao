/*
 * Questão 4 - Faça um programa que receba um ano e o mês; informe quantos dias terá o mês do ano informado, no caso de fevereiro lembre-se de verificar se o ano é bissexto.
 * Considera-se ano bissexto:
 *  • Quando o ano é divisível por 4 e não é divisível por 100;
 *  • Quando o ano é divisível por 100 e divisível por 400
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
    const month = await input('Inform a month(1-12): ');
    const year = await input('Inform a year: ');
    switch(Number(month)){
        case(1): console.log('In',year,'January had 31');
        break;
        case(2): const numYear = Number(year) 
                 const isLeapYear = (numYear % 4 === 0 && numYear % 100 !== 0)
                                   ||  (numYear % 400 === 0 && numYear % 100 === 0)
                if(isLeapYear){
                    console.log('In',year,'February had 29');
                } else {
                    console.log('In',year,'February had 28');
                }
        break;
        case(3): console.log('In',year,'March had 31');
        break;
        case(4): console.log('In',year,'April had 31');
        break;
        case(5): console.log('In',year,'May had 30');
        break;
        case(6): console.log('In',year,'June had 30');
        break;
        case(7): console.log('In',year,'July had 31');
        break;
        case(8): console.log('In',year,'August had 31');
        break;
        case(9): console.log('In',year,'September had 30');
        break;
        case(10): console.log('In',year,'October had 31');
        break;
        case(11): console.log('In',year,'November had 30');
        break;
        case(12): console.log('In',year,'December had 31');
        break;
    }   
    process.exit();
}

main();