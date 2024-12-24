// Function is a  block of code that perform a specific task.
// Can be invoked whenever needed.
// Function defination.
let num = [10,20,30,40,50,60];
function Funx() { // Function define. 
    for(let i = 0; i < num.length; i++){
        console.log(num[i]);
    }
    console.log("i am learning JS");
    console.log(num);
}
Funx(num.push(70,80,90,100)); // Function call.

// Function parameter like a local variables -> Block scope of function. 
function sum(a,b){
let c = a + b;
    return c;
}
console.log(sum(42,38)); 