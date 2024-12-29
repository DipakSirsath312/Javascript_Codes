/*Recursive function in javascript.
 Recursion is the term used when function calls itself from within it's body.
 Recursion can be very useful to comelete some mathematical calculations.*/
// Finding  Factorial of a Number.
function factorial(number){
    if(number === 1)
        return 1;

    return number * factorial(number - 1);
}
let result = factorial(prompt("Enter The Number :-"));
console.log(`Factorial result is :- ${result}`);