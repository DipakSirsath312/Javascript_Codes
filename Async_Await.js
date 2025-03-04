// Async function always return a promise.
// async function myFunc(){...}
// Await pauses the execution of its surrounding async function until the promise is settled.  

// async function hello() {
//     console.log("Hello World");
// }

// Example
// function Api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200)
//         }, 2000)
//     })
// }
// async function getWeatherData() {
//     await Api();
//     await Api();
// }

// Example 2
function Getdata(Data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", Data);
            resolve("success")
        }, 2000)
    });
}
// Async-Await
async function getAllData() {
    console.log("getting data1...");
    await Getdata(1);
    console.log("getting data2...");
    await Getdata(2);
    console.log("getting data3...");
    await Getdata(3);
    console.log("getting data4...");
    await Getdata(4);
    console.log("getting data5...");
    await Getdata(5);
}

getAllData()