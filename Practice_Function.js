// Create a Function using the "function" keyword that takes a String 
// as an argument & returns the number of vowels in the string.
// a,e,i,o,u
function countVowel(str) {
    let count = 0;
    for(const i of str) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" ){
            count++;
        }
    }
    return count;
}

// Create an arrow function to perform the same task.
let funX = (str) => {
    let count = 0;
    for(const i of str) {
        if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u" ) {
            count++;
        }
    }
    return count;
     
}