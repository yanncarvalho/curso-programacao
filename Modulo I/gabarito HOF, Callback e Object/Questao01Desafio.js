/*
 * Questão  1 - Faça uma função que compara dois objects, dois objects 
 serão iguais se possuírem as mesmas chaves e cada chave possui exatamente o mesmo valor, 
 os valores das chaves só poderão ser string ou number.
  Desafio: considere que os valores também possam ser vetores.
 */

function compareArray(arr1, arr2) {

    if (arr1?.length !== arr2?.length) {
        return false;
    }

    return arr1.every((e, i) => {
        if (Array.isArray(e)) {
            return compareArray(arr1[i], arr2[i])
        } else {
            return arr1[i] === arr2[i]
        }
    });

}
function compareObjs(obj1, obj2) {
    const keys1 = Object.keys(obj1)

    if (keys1.length !== Object.keys(obj2).length) {
        return false
    }

    return keys1.every(key => {

        if (Array.isArray(obj1[key])) {
            return compareArray(obj1[key], obj2[key])
        } else {
            return obj1[key] === obj2[key]
        }


    })
}

const obj = { 1: 1, 2: [1,[2]], }
const obj1 = { 1: 1, 2: [1,[2,3]], }
console.log(compareObjs(obj, obj1))