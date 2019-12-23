
var sumNum = (num) => {
  var digits = num.toString().split('').map((item, index) => {
     return parseInt(item);
  })
  var sumDigits = digits.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  
  if (sumDigits <= 9) {
    console.log("Returning ", sumDigits);
    return sumDigits;
  }
  else {
    console.log("Calling self with ", sumDigits);
    var result = sumNum(sumDigits);
    console.log("Returning after calling self ", result); 
    return result;
  }
}
sumNum(3453456645);