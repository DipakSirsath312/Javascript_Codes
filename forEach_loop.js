// forEach loop in Array.
// arr.forEach(callBackFunction)
// Callback Function :- Here, it is a function to execute for each element in the array.  

// A callback is a function passed as an argument to another function.
/* 
arr.forEach((val) => {
    console.log(val);
})
*/
let arr = [1,2,3,4,5,6];

arr.forEach(function funX(Val,idx,arr) { // Value at each idx.
    console.log(Val,idx,arr);
});

// Arrow Function.
let Arr = [7,8,9,10];
Arr.forEach((val,idx,arr) =>{
    console.log(val,idx,arr);
});