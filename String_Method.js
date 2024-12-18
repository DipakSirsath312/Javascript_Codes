// String method in js.
// These are built-in functions to manipulate a string.

// 1 str.toUpperCase()
let str = "dipaksirsath312";
str = str.toUpperCase();
console.log(str);

// 2 str.toLowerCase()
let str2 = "MR-SIRSATH-DIPAK";
str2 = str2.toLowerCase();
console.log(str2);

// 3 str.trim()
let val = "    Hii  Everyone   ";
console.log(val.trim());

// 4 str.slice(start,end) returns part of string.
let val1 = "ImrdCollegeShahada";
console.log(val1.slice(0,11));

// 5. str1.concat(str2) joins str2 with str1.
let val2 = "Please Dont Addmissions This college";
console.log(val1.concat(val2));

Channel = "Youtube";
let Name = "i am learning conding from" + Channel; // is also concat.
console.log(Name);

// 6. str.replace(searchVal,newVal)
let New =  "Miss Lady Sakura";
console.log(New.replace("Sakura","Hinata"));

let hina = "miss hinata";
hina = hina.replace("hinata","Makima");
console.log(hina); 

let Goat = "Gojo";
console.log(Goat.replace("jo","ku"));
let user = "Dipakakakak";
console.log(user.replaceAll("ak","u"));

// 7. str.charAt(idx)
let idx = "i love js";
console.log(idx.charAt("7"));