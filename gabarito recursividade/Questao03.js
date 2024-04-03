/*
 * Questão 3. Implemente uma função que recebe array, value. 
 * A função deve buscar o valor especificado dentro do vetor de forma recursiva. 
 * Se o valor for encontrado, a função deve retornar o índice da última ocorrência desse valor no vetor. Caso contrário, se o valor não estiver presente no vetor, a função deve retornar -1.
 * Obs.:  você pode colocar a função para receber outros parâmetros se assim preferir.
 */
function search(array, value, len = array.length){
    if(len === 0){
        return -1;
    } if(array[len-1] === value){
        return len-1
    } else {
        return search(array, value, --len)
    }
}
