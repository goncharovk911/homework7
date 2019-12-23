var n=8, divisor = [], i = 1;
var divis = (i) =>{
  if(n % i == 0){ divisor.push(i)
  }else if(i>n) {
    return divisor;
  }
  i++
  divis(i)
}
divis(i)
console.log(divisor);

