/**
 * Questão 4 - Dada um vetor não vazio de números inteiros, cada elemento aparece duas vezes, exceto um. 
 * Encontre aquele único.
 * casos teste:
 * Input: nums = [2,2,1]     => Output: 1 
 * Input: nums = [4,1,2,1,2] => Output: 4
 * Input: nums = [1]         => Output: 1
 * referência: https://leetcode.com/problems/single-number
 */

const newArray = []
const nums = [2, 2, 1]

for (let element of nums) {
  if (newArray[element] !== undefined) {
    newArray[element]++;
  } else {
    newArray[element] = 1;
  }
}

for (let i in newArray) {
  if (newArray[i] === 1) {
    console.log(i);
    break;
  }
}