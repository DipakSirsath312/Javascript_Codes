// Swap Two Number in javascript.
let a = 10, b = 20;
console.log(`before swapping :- a = ${a} and b = ${b}`);
// temporary variable.
/*
let temp = a;  temp = 10;
a = b;  a = 20;
b = temp;  b = 10; 
*/

// destructuring 
[a,b] = [b,a];
console.log(`after swapping :- a = ${a} and b = ${b}`);