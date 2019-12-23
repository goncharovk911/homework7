var arg = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key:"name", age:18}]
var foo = (arg) => {
    if (arg.length > 0) {
     var item = arg.shift();
     if (Array.isArray(item)) {
      foo(item);
     }
     else if (typeof(item) != 'object') {
       console.log(item);
     }
     else {
       var values = Object.values(item);
       foo(values);
     }
   
     foo(arg);
    }
   }
   foo(arg)