const Duple = require('./Duple');

const duple1 = new Duple(1, 'A');
const duple2 = new Duple(1, 'A');
const duple3 = new Duple('A', 1);

console.log(duple1.equals(duple2)); // Should return true
console.log(duple1.equals(duple3)); // Should return false
