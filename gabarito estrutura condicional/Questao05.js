/**Questão 5. Crie um jogo para adivinhar um número. 
 * O número será gerado aleatoriamente e terá valores entre 0 e 100, e o usuário terá 3 chances para adivinhar:
 * 	Ao tentar a primeira chance, caso erre, o programa dará uma dica para o usuário: informará se o número digitado é maior ou menor que o número que tenta adivinhar;
 *  Ao tentar a segunda chance, caso erre, além de informar se o número é maior ou menor que o digitado. 
 *  Na terceira chance, caso erre deverá informar qual o número que não foi adivinhado
 * Use a função para gerar números aleatórios:
 * Math.floor(Math.random() * 101);
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
    const randomNum = Math.floor(Math.random() * 101);
    
    let guessStr = await input('1# attempt - guess the number: ');
    let guess = Number(guessStr);

    let won = randomNum === guess;

    if (!won){
        if(guess > randomNum){
            console.log('The number is lower than', guessStr);
        } else {
            console.log('The number is higher than', guessStr);
        }
 

       guessStr = await input('2# attempt - guess the number: ');
       guess = Number(guessStr);
       won = randomNum === guess;
       if (!won){
           if(guess > randomNum){
              console.log('The number is lower than', guessStr);
            } else {
              console.log('The number is higher than', guessStr);
            }

            guessStr = await input('3# attempt - guess the number: ');
            guess = Number(guessStr);
            won = randomNum === guess;
    
        }
    }
   
    if (!won){
        console.log('The number was '+ randomNum);
    } else {
        console.log('You guessed the number '+ randomNum+'!');
    }
    process.exit();
}

main();