// Promises Function:- .then() and catch().
// promise.then((res) => {...})
// promise.catch((err) => {...})
let getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        // resolve("success")
        reject("error");
    });
}

let promise = getPromise();

promise.then((res) => {
    console.log("promise fullfilled!", res);
});
promise.catch((err) => {
    console.log("rejected", err);
});