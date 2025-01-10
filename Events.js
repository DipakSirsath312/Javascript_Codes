// Events in Js.
// The change in The state of an object is known as an Event.
// Event are Fired to notify code of "interesting changes" that may affect code execution.

// Mouse events(click,double click etc)
btn.onclick = () => {
    console.log("Button was Clicked")
}

btn2.ondblclick = () => {
    console.log("button was double click!");
}

let div = document.querySelector("#div1");
div.onmouseover = () => {
    console.log("Your are inside div");
} 