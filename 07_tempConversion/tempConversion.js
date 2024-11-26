const convertToCelsius = function (inputTemp) {
  const tempCelsius = Number(((inputTemp - 32) * (5 / 9)).toFixed(1));
  return tempCelsius;
};

const convertToFahrenheit = function (inputTemp) {
  const tempFahrenheit = Number((inputTemp * (9 / 5) + 32).toFixed(1));
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
