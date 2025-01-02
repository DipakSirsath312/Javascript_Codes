console.dir(document.body);
console.log(document.body);
document.body.style.backgroundColor = "pink ";
document.body.childNodes[5].innerText = "Alpesh";

// 1.Selecting with id.
// document.getElementByid("myid");
let idName = document.getElementById("Button1");
console.dir(idName);

// 2.Selecting with class.
// document.getElementByClassName()
let className = document.getElementsByClassName("italic2");
console.log(className);
console.dir(className);

// 3.Selecting with tag.
// document.getElementByTagName("p")
let Paras = document.getElementsByTagName("p");
console.log(Paras);