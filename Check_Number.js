// Check if a number is positive,negative or zero in javascript.
checknumber = (number) =>{
    if(number === 0)
        return 'Number is Zero';
    if(number < 0)
        return `Number is Negative`
    if(number > 0)
        return `Number is Positive`;
}
console.log(checknumber(0));
console.log(checknumber(-10));
console.log(checknumber(5));