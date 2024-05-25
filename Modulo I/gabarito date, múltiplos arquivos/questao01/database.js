module.exports = { getDateFromDB };

/**
 * Generate a random date
 * 
 * @returns {Date}
 */
function genRandomDate() {
    const numberOfDaysToAdd = Math.floor(Math.random() * 30); 
    const randomDate = new Date();
    randomDate.setDate(new Date().getDate() + numberOfDaysToAdd);
    return randomDate;
}

/**
 * Generate an array with dates, simulating a database
 * 
 * @returns {Array<Date>} an array with all dates from database
 */
function getDateFromDB(){
    return new Array(Math.trunc(Math.random() * 901) + 100).fill(0).map(() => genRandomDate())
}
