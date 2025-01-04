// Dom Manipulation.
// Query Selector.

// document.querySelector("myid/myClass/tag");
// returns first element
let Elements = document.querySelector("p"); //1st element.
console.dir(Elements);

// document.querySelectorAll("myid/myClass/tag");
// returns a Nodelist
let Val = document.querySelectorAll("p"); // all elements.
console.log(Val);
console.dir(Val);

Val = document.querySelectorAll(".Class_Clg");
console.log(Val);
console.dir(Val);

Val = document.querySelector("#Button_1");
console.log(Val);
console.dir(Val); 