// Create an array to store companies-> ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// Remove the first company from the array.
// Remove Uber & Add Ola in its place.
// Add Amazon at the end.

let Companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(Companies);
console.log(Companies.splice(0,1));
console.log(Companies);
console.log(Companies.splice(1,1,"Ola"));
console.log(Companies.push("Amazon"));
console.log(Companies);