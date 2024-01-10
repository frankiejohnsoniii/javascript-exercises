const convertToCelsius = function(F) {
  return Math.round((5*(F-32)/9)*10)/10
};

const convertToFahrenheit = function(C) {
  return Math.round((9*C/5+32)*10)/10 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
