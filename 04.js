
var sumNum = (num) => {
  var digits = num.toString().split('').map((item, index) => {
     return parseInt(item);
  })
  var sumDigits = digits.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
    
  });
  
 console.log(sumDigits);
 
}
sumNum(2435436);