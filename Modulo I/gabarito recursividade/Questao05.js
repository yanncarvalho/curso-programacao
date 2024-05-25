/*
 * Questão 5.  Os números de Pell são definidos pela seguinte recursão.
 *  Exemplo de números desta sequência são: 0, 1, 2, 5, 12, 29, 70, 169, 408, 985... 
 * Implemente um método recursivo que receba como entrada um número N e retorne o Nésimo número de Pell.
*/
function pell(n) {
    if (n == 0) {
        return 0;
    } if (n == 1) {
        return 1;
    } else {
        return 2*pell(n - 1) + pell(n - 2);
    }
}
console.log(pell(6))