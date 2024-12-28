// Take a number n as input from user.Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array. 
let n = prompt("Enter a Number :-");
let arr = [];

for(let i = 1; i <= n; i++){
    arr[i-1] =  i;
}
console.log(arr); 
// sum of all.
newArr = arr.reduce((Prev,Curr) => {
    return Prev + Curr;
});
console.log("Sum of Num :-",newArr);
// factorial.
let fact = arr.reduce((Prev,Curr) => {
    return Prev * Curr;
});
console.log("Factorial Num :-",fact);