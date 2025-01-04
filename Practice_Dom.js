// Create a H2 heading element with text -"Hello java".Append "Hii Javascript" to this text using js.
let Append = document.querySelector("h2");
console.dir(Append.innerText = Append.innerText + "From Youtube");

// Create a 3 divs with common class name - "box".Access them & add some unique text to each of them.
let Divs = document.querySelectorAll(".box");
console.log(Divs);
// Normal
Divs[0].innerText = "Ishwar bhachhav";
Divs[1].innerText = "Yogesh Badgujar";
Divs[2].innerText = "Chetan Patil";
// Advance
let count = 1;
for(div of Divs){
    div.innerText = `New Unique Value ${count}`;
    count++;
}