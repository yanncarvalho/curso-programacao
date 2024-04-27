/*
 * Questão 03 - Desenvolva uma função em JavaScript que valide números de CPF. 
 * O CPF é composto por 11 dígitos numéricos, sendo os dois últimos dígitos verificadores. Sua tarefa é criar uma função que receba um CPF como entrada e determine se ele é válido ou não. 
 * A fórmula de validação do CPF pode ser encontrada no link: Algoritmo de Validação do CPF.
*/

function getCPFVerificationDigits(partialCPF) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < partialCPF.length; i++) {
        sum1 += parseInt(partialCPF.charAt(i)) * (partialCPF.length + 1 - i);
        sum2 += parseInt(partialCPF.charAt(i)) * (partialCPF.length + 2 - i);
    }

    const remainder1 = sum1 % 11;
    const digit1 = remainder1 < 2 ? "0" : "" + (11 - remainder1);

    sum2 += digit1 * 2; 
    const remainder2 = sum2 % 11;
    const digit2 = remainder2 < 2 ? "0" : "" + (11 - remainder2);

    return digit1.concat(digit2);
}

function isCPFValid(cpf) {

    if(cpf.length !== 11) {
        return false;
    }

    const lastTwoDigtis = getCPFVerificationDigits(cpf.slice(0, 9))
    return lastTwoDigtis === cpf.slice(9)
}


module.exports = { isCPFValid };
