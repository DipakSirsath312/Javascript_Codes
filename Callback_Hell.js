// Callback Hell
// Callback Hell : nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid Doom)

function getData(dataId,getNextData){
    //2s
    setTimeout(() => {
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// Callback Hell

getData(1, () => {
    console.log("getting data2....");
    getData(2, () => {
        console.log("getting data3....");
        getData(3, () => {
            console.log("getting data4....");
            getData(4);
        });
    });
});

// This style of progrmming becomes difficult to understand and manage.