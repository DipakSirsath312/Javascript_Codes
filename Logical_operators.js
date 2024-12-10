// logical operators
/*
logical &&
logical ||
logical ! 
*/

let a = 10;
let b = 9;

let cond1 = a > b;
let cond2 = a === 10;
console.log("a && b :-",cond1 && cond2);
console.log("a && b :-",a > b && a === b);
console.log("a || b :-",a > b || a === b);
console.log("a ! b",!(a < b || a===b));