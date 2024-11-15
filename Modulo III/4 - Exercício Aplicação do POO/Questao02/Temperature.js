class Temperature {
  constructor(value, unit) {

    // Store the temperature in Kelvin to simplify calculations.
    this.value = this._toKelvinFromUnit(value, unit.toLowerCase());

  }


  _toKelvinFromUnit(value, unit) {
    switch (unit) {
      case 'celsius':
        return value + 273.15;

      case 'fahrenheit':
        return (value - 32) * 5 / 9 + 273.15;

      case 'kelvin':
          return value;

      default:
        throw new Error("Invalid unit");
    }
  }


  toFahrenheit() {
    return (this.value - 273.15) * 9 / 5 + 32;
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