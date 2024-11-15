const Temperature = require('./Temperature');


const temp1 = new Temperature(25, 'Celsius');  // 25°C
const temp2 = new Temperature(77, 'Fahrenheit');  // 77°F

// Convert to other units
console.log(temp1.toFahrenheit()); // Output: 77
console.log(temp1.toKelvin());     // Output: 298.15
console.log(temp2.toCelsius());    // Output: 25
console.log(temp2.toKelvin());     // Output: 298.15

// Compare temperatures
console.log(temp1.compare(temp2)); // Output: 0 (both are equal )
