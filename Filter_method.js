// Filter methods.
// Creates a new array of elements that give true for a condition / filter.
// all even elements.
let arr = [1,2,3,4,5,6,7,8,9,10];


let newArr = arr.filter((val) =>{
    return val %2 ===  0;
}); 

console.log(newArr);