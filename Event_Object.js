// Event Object.
// It is a special object that details about the event.
// All event handlers have access to the Event Object's properties and methods.

// e.target, e.type, e.clientX, e.clientY

let butt = document.querySelector("#btn");
butt.onclick = (e) => {
    console.log("button is work",e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}
btn2.ondblclick = (e) =>{
    console.log("button is dbl work",e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}