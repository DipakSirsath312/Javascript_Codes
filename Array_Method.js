// Arrays in js.
// Array Methods.

// 1.Push() :- add to end. 
let uchiha = ["Madara","Itachi","Obito","Shishui"];
uchiha.push("Sasuke","Sarda");
console.log(uchiha);

// 2.Pop() :- delete from end & return.
let Nums = [0,1,2,3,4,5,6,7,8,9,10];
console.log(Nums);
let deleteItem = Nums.pop();
console.log(`Delete Value:- ${deleteItem}`);

// 3.toString() :- converts array to string.
let Names = ["Ishwar","Yogesh","Harshal","Danish"];
let Marks = [29,30,46,35,24];
console.log(Names);
console.log(Marks);
console.log(Names.toString());
console.log(Marks.toString());

// 4.Concat() :- joins multiple arrays & returns result.
let Marvel_Heros = ["Ironman","Thor"];
let Dc_Heros = ["Batman","Superman"];
let lol = ["Shaktiman","Krish"];
Heros = Marvel_Heros.concat(Dc_Heros,lol);
console.log(Heros);

// 5.unShift() :- add to start.
let movies = ["500 days of summer","YourName","Suzume","Weathering with You"];
movies.unshift("96","The slient voice"); 
console.log(movies);

let del = movies.shift();
console.log(del);

// 6.slice() :- returns a piece of the array.
let stud = ["chetan","yogesh","shubham","ishwar","Dj","jayash"];
console.log(stud);
console.log(stud.slice(3,stud.length));

// 7. splice() :- change original array(add,remove,replace);
console.log(stud.splice(0,1,"Harshal"));
console.log(stud);

let nums = [10,20,30,40,50];
nums.splice(4,nums.length,80);
console.log(nums);
// Add Element
nums.splice(2,0,101);
console.log(nums);
// Delete Element.
nums.splice(2,1);
console.log(nums);
// Replace Element
nums.splice(2,2,101,102);
console.log(nums);