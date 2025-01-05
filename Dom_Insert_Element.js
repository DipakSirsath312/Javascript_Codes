// Dom Manipulation.
// Insert Element.

// First Step create a Element.
let newBtn = document.createElement("button");
console.dir(newBtn);
newBtn.innerText = "Click Me!";

// 1. node.append(el) adds at the end of node (inside).
let D1 = document.querySelector(".Div1");
D1.append(newBtn);

// 2. node.prepend(el) adds at the start of node (inside).
D1.prepend(newBtn);

// 3. node.before(el) adds before the node (outside).
D1.before(newBtn);

// 4. node.after(el) adds after the node (outside).
D1.after(newBtn);

let Head = document.createElement("h3");
Head.innerHTML = "<i>Wake Up To Reality...</i>";

document.querySelector("body").prepend(Head);

// Delete Element.
// 1. node.remove(el) removes the node.
let Paras = document.querySelector(".Div1");
Paras.remove();