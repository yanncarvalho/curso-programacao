/*
* Questão 01 - Usando arquivo database.js que simula informações vindas de um banco de dados 
* crie uma função que recebe um data e verifique se essa data já está entre as datas do banco
*/

const { getDateFromDB } = require('./database.js');


function hasDate(date){
  const dates = getDateFromDB()
  return dates.some(e => e === date)
}

console.log(hasDate(new Date()));

