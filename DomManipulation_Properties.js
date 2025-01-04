// Dom Manipulation.
// Properties :-

// 1.tagName : returns tag for element nodes.
let val = document.querySelector("p");
console.dir(val.tagName);

// 2.innerText : returns the text content of the element and all it's children.
let Div = document.querySelector("div");
console.dir(Div.innerText);

// 3.innerHTML : returns the plain text or HTML contents in the element.
let Content = document.querySelector(".Frutes");
console.dir(Content.innerHTML);

// 4.textContent : returns textual content even for hidden elements.
let New = document.querySelector("h3");
console.log(New.textContent);