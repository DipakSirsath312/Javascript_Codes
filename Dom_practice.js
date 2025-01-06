// Create a new button element.give it a text "Click me",background color of red and text color of white.
// insert the button as the first element inside the body tag.
let Btn = document.createElement("button");
Btn.innerText = "Click Me";
console.dir(Btn);

Btn.style.backgroundColor = "red";
Btn.style.color = "white";

document.querySelector("body").prepend(Btn);