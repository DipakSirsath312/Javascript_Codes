// Exercise using function in javascript.
// 1.Create function with name add taking 2 parameters a and b.
// 2.Calculate addition of a and b return the result.
// 3.Call this function 5 times with different parameter values.
// 4.Display the result of all calls to function with proper statement to be displayed on conosle.
// 5.Convert the function to arrow function.
let funX = (a,b) => {
    let sum = a + b;
    return sum;
};
 
console.log(`Result of addition two numbers is:- ${funX(10,5)}`);
console.log(`Result of addition two numbers is:- ${funX(6,8)}`);
console.log(`Result of addition two numbers is:- ${funX(1,6)}`);
console.log(`Result of addition two numbers is:- ${funX(16,5)}`);
console.log(`Result of addition two numbers is:- ${funX(19,8)}`);