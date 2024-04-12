/*
 * Questão 5 - Faça uma HOF chamado “none”, 
 * essa função recebe um Array e uma função de callback, 
 * a função de callback será chamada para cada iteração do vetor 
 * e receberá 3 parâmetros: elemento do vetor, índice e o Array, 
 * a função de callback deverá retornar um valor booleano, 
 * se para qualquer elemento do vetor a função de callback 
 * retornar true, none retornará false, senão retornará false
 */
function none(arr, callback){
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return false;
        }
        return true;

    }
}

const arr = [1,2,3];

console.log(none(arr, e => e === 0))