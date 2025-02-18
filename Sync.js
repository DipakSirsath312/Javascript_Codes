// Sync in JS

// Syncronous
// Synchronous means the code runs in a particular sequence of instruction given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asyncronous
// Due to syncronous programming,something imp instructions get blocked due to some previous instruction,
// which causes a dealy in the UI. Asyncronous code execution allows to execute next instruction immediately and doesn't block the flow.
// For Example:- 
console.log("Hii....");
console.log("Everyone");

setTimeout(() =>{
    console.log("rat ke 2:00 baje");
},2000);

console.log("good night"); 
console.log("start overthinking");