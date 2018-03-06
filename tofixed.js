function toFixed (value, precision) {

  // Become the value an string an move two integers the '.' to the right.
  var arrayValue = value.toString().split('.');
  var reArrenge =  arrayValue[0] + arrayValue[1].substr(0, 2) + '.' + arrayValue[1].substr(2);

  // Calculate the number and become it to number
  var fixer = (Math.round(Number(reArrenge))/100).toFixed(precision);

  return fixer;
}