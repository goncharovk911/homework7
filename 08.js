var arg = [ 20, 11,  6, 33, 25, 54, 97], newArg=[]

var assert = (arg) => {
    if (arg.length>0) {
        var argNumb = arg.shift();
        if (argNumb%2) {
            assert(arg)         
        }else{
            newArg.push(argNumb)
        }
        assert(arg)
    }return newArg
}

assert(arg);
console.log(newArg);
