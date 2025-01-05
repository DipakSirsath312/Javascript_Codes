// Dom Manipulation.

// Attributes.
// 1.getAttribute(attr) To get the attribute value.
let Divs = document.querySelector("div");
let Val = Divs.getAttribute("id");
console.log(Val);

let Myclass = document.querySelector("p");
console.log(Myclass.getAttribute("class"));

// 2.setAttribute(attr,value) To set the attribute val.
console.log(Myclass.setAttribute("class","NewClass"));
console.log(Divs.setAttribute("id","NewId"));

// Style.
// 1.node.style.
console.log(Myclass.style);
console.log(Divs.style);

Divs.style.backgroundColor = "Pink";
Myclass.style.color = "Yellow";

Divs.style.fontSize = "25px";
Myclass.style.fontSize = "20px";

Myclass.innerText = "Naruto Uzumaki";
Divs.innerText = "Hii Everyone..!"