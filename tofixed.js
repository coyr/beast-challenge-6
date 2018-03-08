function toFixed (value, precision) {
  
  arrayValue = [];
  // Detect decimal number
  if(value.toString().match(/[.]/)) {
    var arrayValue = value.toString().split('.');  
  } else {
    return value.toFixed(precision);
  }

  // Check if number has only one decimal
  if ( arrayValue[1].length !== 1 ) {
    var reArrenge =  arrayValue[0] + arrayValue[1].substr(0, 2) + '.' + arrayValue[1].substr(2);
  // If has only one decimal add a zero 
  } else {
    var addZero = '0';
    var reArrenge =  arrayValue[0] + arrayValue[1] + addZero;
  }

  // Calculate the number and become it to string
  var fixer = (Math.round(Number(reArrenge))/100).toFixed(precision);

  return fixer;
}

//=================================
// Tests
//================================

//-------------------------------
// Case 1

toFixed(0.615, 2); // '0.62'

//-------------------------------
// Case 2

toFixed(10.235, 2); // '10.24'

//-------------------------------
// Case 3

toFixed(1.005, 2); // 1.01


