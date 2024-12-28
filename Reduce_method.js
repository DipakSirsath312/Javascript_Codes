// Reduce method.
// Perform some operations & reduces the array to a single value.it returns that single value.
let arr = [1,2,3,4,5];

let sum = arr.reduce((Prev,Curr) => {
    return Prev + Curr;
});

console.log("Sum of Numbers :-",sum);

// Largest Number.
let Num = [1,3,5,106,7,9];

let largeNum = Num.reduce((Prev,Curr) => {
    return Prev > Curr ? Prev : Curr;
});
console.log("Largest Number :-",largeNum);