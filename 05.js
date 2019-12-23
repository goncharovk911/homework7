var arr = [1, 22, 3, 11, 32, 6, 4, 7], newArr=[]
var isNumberInRange = (arr) => {
    
    if (arr.length > 0) {
        var item = arr.shift();
        item < 10 > 0 ? newArr.push(item) : isNumberInRange(arr) 
        isNumberInRange(arr)
       
    }
    return newArr
    
}
isNumberInRange(arr)
console.log(newArr);
