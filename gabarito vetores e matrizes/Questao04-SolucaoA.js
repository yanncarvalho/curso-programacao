/**
 * Questão 4 - Dada um vetor não vazio de números inteiros, cada elemento aparece duas vezes, exceto um. 
 * Encontre aquele único.
 * casos teste:
 * Input: nums = [2,2,1]     => Output: 1 
 * Input: nums = [4,1,2,1,2] => Output: 4
 * Input: nums = [1]         => Output: 1
 * referência: https://leetcode.com/problems/single-number
 */

//Brute force solution
const nums = [2, 2, 1]
let result;
for (let i = 0; i < nums.length; i++) {
  let isEqual = false;
  for (let j = 0; j < nums.length; j++) {
    if (i !== j && nums[i] === nums[j]) {
      isEqual = true;
      break;
    }
  }

  if (!isEqual) {
    result = nums[i]
    break;
  }

}
console.log(result);