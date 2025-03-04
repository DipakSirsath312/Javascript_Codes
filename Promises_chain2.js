function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
            console.log("Data", dataId);
        }, 2000);
    })
}
console.log("fetching data...");
getData(1).then((res) => {
    getData(2).then((res) => {
        getData(3).then((res) => {
            getData(4).then((res) => {
                getData(5).then((res) => {
                    return console.log("success");
                })
            });
        });
    });
})