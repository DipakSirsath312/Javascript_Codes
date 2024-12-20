// Arrays in js.
// arrays is a collection of items.
let marks = [66,29,39,45,53,69,];
console.log(marks);

let Name = ["Makima","Hinata","Devil","Mitsuha"];
console.log(Name);

// Array Indices.
// arr[0],arr[1],arr[2]...
let arr = [10,20,30,40,50,60];
arr[2] = 35;
console.log(arr);

// Looping over an Array.
// Print all elements of an array.
let Characters = ["Madara","Itachi","Obito","Pain","Master-Jiraya"];
for(let i = 0; i < Characters.length; i++){
    console.log(Characters[i]);
}

// for-of loop.
for(let ele of Characters){
    console.log(ele);
}