// For a given array with marks of students-> [85,94,33,44,76,60]
// Find the average marks of the entire class.

let Marks = [85,94,33,44,76,60];
let sum = 0;
for(let val of Marks){
    sum = sum + val;
}
let Avg = sum / Marks.length;
console.log(`Student Avg = ${Avg}`);