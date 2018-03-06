function toFixed (value, precision) {
  
  // expect( toFixed(12.2, 2) ).toBe( "12.20" );
  // 12.2 => 1220
  arrayValue = [];
  if(value.toString().match(/[.]/)) {
    var arrayValue = value.toString().split('.');  
  } else {
    return value.toFixed(precision);
  }

  // Become the value an string an move two integers the '.' to the right.

  // 
  if ( arrayValue[1].length !== 1 ) {
    var reArrenge =  arrayValue[0] + arrayValue[1].substr(0, 2) + '.' + arrayValue[1].substr(2);
  // 
  } else {
    var addZero = '0';
    var reArrenge =  arrayValue[0] + arrayValue[1] + addZero;
  }

  // Calculate the number and become it to number
  var fixer = (Math.round(Number(reArrenge))/100).toFixed(precision);

  return fixer;
}
