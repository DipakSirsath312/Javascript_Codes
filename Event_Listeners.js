// Event Listeners.

// node.addEventListeners(event,callback)
// node.removeEventListener(event,callback)
let btn = document.querySelector("#butt1");
btn.addEventListener("click", (eve)=> {
    console.log("button was clicked! - Handler1");
    // console.log(eve.type);
    // console.log(eve.target);
});

btn.addEventListener("click", ()=> {
    console.log("button was clicked! - Handler2"); 
});
/* Note:- the callback reference should be same to remove. */
const handler3 = () => {
    console.log("button was clicked! - handler3")
}
btn.addEventListener("click",handler3);

btn.addEventListener("click", ()=> {
    console.log("button was clicked! - Handler4"); 
});
// removeListener.
btn.removeEventListener("click",handler3);