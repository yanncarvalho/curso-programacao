/*
 * Questão 03 -  Crie uma função gera um CPF válido.
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

function generateCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }
    const lastTwoDigtis = getCPFVerificationDigits(cpf)

    return cpf.concat(lastTwoDigtis);
}

module.exports = { generateCPF };
