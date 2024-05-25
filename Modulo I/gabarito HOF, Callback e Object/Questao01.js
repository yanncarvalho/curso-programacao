/*
 * Questão  1 - Faça uma função que compara dois objects, dois objects 
 serão iguais se possuírem as mesmas chaves e cada chave possui exatamente o mesmo valor, 
 os valores das chaves só poderão ser string ou number.
  Desafio: considere que os valores da chave também possam ser vetores.
 */
function compareObjs(obj1, obj2) {
    const  keys1  = Object.keys(obj1)

    if (keys1.length !== Object.keys(obj2).length){
        return false
    }

   return keys1.every(key => obj1[key] === obj2[key])
}

const obj = {1: 1, 2: 2,}
const obj1 = {1: 1, 2: 3,}
console.log(compareObjs(obj, obj1))