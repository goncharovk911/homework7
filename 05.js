var arr = [1, 22, 3, 11, 32, 6, 4, 7], newArr=[]
var isPositive = (arr) => {
    
    if (arr.length > 0) {
        var item = arr.shift();
        item < 10 > 0 ? newArr.push(item) : isPositive(arr) 
        isPositive(arr)
       
    }
    return newArr
    
}
isPositive(arr)
console.log(newArr);
