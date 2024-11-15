class Temperature {
    constructor(value, unit) {
  

      this.unit = unit.toLowerCase();

        // Store the temperature in Kelvin to simplify calculations.
      this.value =  (this.unit === 'kelvin') ? value : this._convToKelvin(value, this.unit);
     
      }
    

    _convToKelvin(value, unit){
        switch (unit) {
            case 'celsius':
              return this.value = value + 273.15; 
            
            case 'fahrenheit':
             return this.value = (value - 32) * 5/9 + 273.15; 
           
            default:
              throw new Error("Invalid unit");
          }
    }
  

    toFahrenheit() {
      return (this.value - 273.15) * 9/5 + 32;
    }
  

    toKelvin() {
      return this.value;
    }
  
    toCelsius() {
      return this.value - 273.15;
    }
  

    compare(otherTemperature) {
      const currentTempInKelvin = this.value;
      const otherTempInKelvin = otherTemperature?.toKelvin();
  
      if (currentTempInKelvin > otherTempInKelvin) {
        return 1; 
      } 
      
      if (currentTempInKelvin < otherTempInKelvin) {
        return -1; 
      }
        
      return 0; 
      
    }
  }
  
  module.exports = Temperature;  