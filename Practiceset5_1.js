// For a given array with price of 5 items -> [250,645,300,900,50].
// All items have an offer of 10% OFF them.Change the array to store final price after applying offer.

//For-of Loop.
let items = [250,645,300,900,50];
let i = 0;
for(let val of items){
    let offer = val / 10;  
    items[i] = items[i] - offer; 
    console.log(`Value after offer =  ${items[i]}`);
    i++;
}

// For Loop.
let val = [250,645,300,900,50];
for(let i = 0; i < val.length; i++){
    let offer = val[i] / 10;
    val[i] -= offer;
}
console.log(val);