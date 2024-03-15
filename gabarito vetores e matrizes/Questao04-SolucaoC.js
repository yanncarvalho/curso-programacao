/**
 * Questão 4 - Dada um vetor não vazio de números inteiros, cada elemento aparece duas vezes, exceto um. 
 * Encontre aquele único.
 * casos teste:
 * Input: nums = [2,2,1]     => Output: 1 
 * Input: nums = [4,1,2,1,2] => Output: 4
 * Input: nums = [1]         => Output: 1
 * referência: https://leetcode.com/problems/single-number
 */

//Bitwise solution
const nums = [2, 2, 1]
let result;
for (let element of nums) {
  result ^= element;
}
console.log(result);