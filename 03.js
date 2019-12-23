var arr = [1, 2, 3, -1, -2, -3], newArr=[]
var isPositive = (arr) => {
    
    if (arr.length > 0) {
        var item = arr.shift();
        if ( item > 0 ) {
            newArr.push(item)
            isPositive(arr)
        }
        isPositive(arr)
    }
    return newArr
    
}
isPositive(arr)
console.log(newArr);
