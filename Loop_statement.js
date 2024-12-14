// for Loop.
// Loops are used execute a piece of code again & again.
for(let i = 1; i <= 100; i++){
    console.log(i, "Radhe radhe...");
}
console.log("loop has ended");
// Calculate sum of 1 to 5
let sum = 0;
let n  = 5;
for(let i = 0; i <= n; i++){
    sum = sum + i;
}
console.log("sum:-",sum); 

// For loop to print table of a number.
let x = 5;
for(let i = 1; i <= 10; i++){
    console.log(x * i);
}
console.log("loop end");
// For loop to print elements of an array.
let arr = [10,20,30,40,50];
for(let i = 0; i <= arr.length; i++){
    console.log(arr[i]);
}
