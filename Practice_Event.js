// let's Practice
// Create a toggle button that change the screen to dark-mode when clicked & light-mode when clicked again.
let modeBtn = document.querySelector("#mode");
let currMode = "Light";

modeBtn.addEventListener("click", () =>{
    if(currMode === "Light"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});