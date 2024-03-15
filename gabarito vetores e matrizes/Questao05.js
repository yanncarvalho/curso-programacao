/**
 * Questão 5 - Crie um jogo da velha
 * Obs.: caso precise arredondar valores:
 *  Math.ceil  - Arredondamento para cima = qualquer número com parte fracionada é somado + 1; ex.; 3.01 = 4
 *  Math.floor - Arredondamento para baixo = sempre ignora a parte fracionada; ex.: 3.9 = 3
 *  Math.round - Arredondamento para o número inteiro mais próximo = se o número da parte fracionada for menor que 5 ignora a parte fracionada, senão soma + 1; ex: 3.4 = 3, 3.5 = 4  
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
    const m = [
        new Array(3),
        new Array(3),
        new Array(3),
    ]

    let player;
    let cont = 0;
    let win = false;

    do {
        player = (player === 'X') ? 'O' : 'X';

        console.log();
        console.log(m[0][0] || 1, '|', m[0][1] || 2, '|', m[0][2] || 3)
        console.log('---------')
        console.log(m[1][0] || 4, '|', m[1][1] || 5, '|', m[1][2] || 6)
        console.log('---------')
        console.log(m[2][0] || 7, '|', m[2][1] || 8, '|', m[2][2] || 9)
        console.log();

        const op = Number(await input('player ' + player + ' choose a number: '));
        const invalidOp = op < 1 || op > 9;

        let i, j;
        if (!invalidOp) {

            i = Math.ceil(op / 3) - 1;
            j = (op % 3 || 3) - 1;
        }

        if (invalidOp || m[i][j]) {
            console.log('Invalid option!');
            continue;
        }

        m[i][j] = player;

        let winVertical = true, winHorizontal = true;
        for (let h = 1; h < 3; h++) {
            //Horizontal check 
            if (m[i][0] !== m[i][h]) {
                winHorizontal = false;
            }

            // Vertical check 
            if (m[0][j] !== m[h][j]) {
                winVertical = false;
            }
        }
        win = winVertical || winHorizontal;

        // Diagonal check
        if (!win && i === j) {
            win = (m[0][0] === m[1][1] && m[0][0] === m[2][2])
        }

        if (!win && i + j === 2) {
            win = (m[1][1] === m[0][2] && m[1][1] === m[2][0])
        }

        cont++;

    } while (cont < 9 && !win);


    if (win) {
        console.log(player, 'won the game!')
    } else {
        console.log('It was a draw')
    }

    process.exit();
}

main();

