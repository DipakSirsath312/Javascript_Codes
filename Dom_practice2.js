// Create a <p> tag in html,give it a class & some styling.
// Now creare new class in css and try append this class to the <p> element.

let val = document.querySelector("p");
// console.log(val.getAttribute("class")); 

// console.log(val.setAttribute("class","newClass"));

/* 
Did you notice,how you overwrite the class name when you add a new one?
Solve this problem using classlist.
*/
console.log(val.classList.add("newClass"));
console.log(val.classList);