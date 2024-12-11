// else-if statement.
//1.
let age = 55;

if(age < 30){
    console.log("junior");
}else if(age > 30 && age < 45){
    console.log("senior");
}else if(age > 45 && age < 80){
    console.log("Super senior")
}else{
    console.log("middle");
}
//2.
let mode = "light";
let color;

if(mode === "dark"){
    color = "black";
}else if(mode === "light"){
    color = "white";
}else if(mode === "blue"){
    color = "blue";
}else{
    color = "pink";
}

console.log(color);