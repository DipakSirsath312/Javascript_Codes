// Print the fibonacci sequence in JavaScript.
// 0, 1, 1, 2, 3, 5, 8, 13, 21,
let num1 = 0, num2 = 1;
console.log(num1);
console.log(num2);

for(let i = 3; i <= 10; i++){
    let num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
}
