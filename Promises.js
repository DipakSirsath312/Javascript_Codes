// Promises is for "eventual" completion of task.it is an object in JS.
// it is a solution to callback hell.

// Syntax:-
// let promise = new Promise((resolve,reject) => {....}) Function with 2 handlers 

// let promise = new Promise((resolve, reject) => {
//     console.log("i like you");
//     resolve("*Me :- ok");

// });
// let unsure = new Promise((resolve, reject) => {
//     console.log("her :- Error some occured");
//     reject("Sorry i have a boyfriend")
// });

// For Example:-
function getData(dataId, getNextData) {
    //5s
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Data", dataId);
            // resolve("success");
            reject("error");
            if (getNextData) {
                getNextData();
            }
        }, 5000);
    });
}