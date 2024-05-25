/**
 * Questão 01 - Faça a multiplicação de uma matriz 4x2 com um número N, 
 * informado pelo usuário, considera-se multiplicação de número N com a matriz, 
 * quando se multiplica todos os elementos da matriz por N.
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
  const matrix = new Array(4).fill(new Array(2)).map(a => a = a.fill(0).map(e => e = Math.floor(Math.random() * 100)));
  const number = Number(await input('Inform a number: '));
  console.log('matrix', matrix)
  for (const arr of matrix) {
    for (const i in arr) {
      arr[i] *= number
    }
  }
  console.log('new matrix', matrix)
  process.exit();
}
main();