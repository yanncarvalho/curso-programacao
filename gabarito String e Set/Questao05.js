/**
 * Questão 5. Dado um numero romano, converta-o para um número inteiro. 
 * Os numerais romanos são representados por sete símbolos diferentes: I, V, X, L, C, D e M.
 * Símbolo 	Valor
 * I	 	1
 * V 		5
 * X 		10
 * L 		50
 * C 		100
 * D	 	500
 * M 		1000
 * 
 * Por exemplo, 2 é escrito como II em números romanos, apenas dois uns adicionados juntos. 
 * 12 é escrito como XII, que é simplesmente X + II. 
 * O número 27 é escrito como XXVII, que é XX + V + II.
 * Os numerais romanos geralmente são escritos do maior para o menor da esquerda para a direita. No entanto, o numeral para quatro não é IIII. Em vez disso, o número quatro é escrito como IV. Porque o um está antes do cinco, nós o subtraímos fazendo quatro. O mesmo princípio se aplica ao número nove, que é escrito como IX. Existem seis instâncias em que a subtração é usada:
 * I pode ser colocado antes de V (5) e X (10) para fazer 4 e 9.
 * X pode ser colocado antes de L (50) e C (100) para fazer 40 e 90.
 * C pode ser colocado antes de D (500) e M (1000) para fazer 400 e 900.
 * Exemplos de uso: 
 * Input: s = "III"  Output: 3
 * Explicação: III = 3.
 * 
 * Input: s = "LVIII" Output: 58
 * Explicação: L = 50, V= 5, III = 3.
 * 
 * Input: s = "MCMXCIV" Output: 1994
 * Explicação: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const value = romanValues[s[i]];
        if (value < prevValue) {
            result -= value;
        } else {
            result += value;
        }
        prevValue = value;
    }

    return result;
}

console.log(romanToInt("MCMXCIV"));
