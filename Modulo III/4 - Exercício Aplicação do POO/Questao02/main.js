/*Questão 2. Implemente uma classe chamada Temperature que permita converter temperaturas entre as unidades Celsius, Fahrenheit e Kelvin. 
A classe ao ser inicializada deverá ser informado o valor da temperatura e a unidade (Celsius, Fahrenheit ou Kelvin).
toFahrenheit():retornará a temperatura em Fahrenheit.
toKelvin(): retornará a temperatura em Kelvin.
toCelsius(): retornará a temperatura em Celsius.
compare(otherTemperature): Compara a temperatura atual com outra temperatura fornecida, 
independentemente da unidade em que a outra temperatura esteja expressa. 
O método retorna: 1 se a temperatura atual for maior que a fornecida; 
0 se ambas as temperaturas forem iguais; 
-1 se a temperatura atual for menor que a fornecida.
*/

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
