// How to generate random number in javascript.
function getRandomNumber(){
    return Math.ceil(Math.random() * 10);
}

for (let index = 0; index < 5; index++) {
    console.log(getRandomNumber());
}