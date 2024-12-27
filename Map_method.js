// Map array method.
// Creates a new array with the results of some operation.
// The value its callback returns are used to form new array.
// arr.map(callbackFnx(value.index,array))
let nums = [10,20,30,40,50];
let newArr= nums.map((val) => {
    return val;
});

console.log(newArr);