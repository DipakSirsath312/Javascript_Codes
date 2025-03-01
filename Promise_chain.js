function asynFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}
function asynFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}
console.log("fetching data...");
asynFunc1().then((res) => {
    console.log("fetching data2...");
    asynFunc2().then((res) => { });
});