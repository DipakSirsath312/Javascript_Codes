// Display Multiplication Table in JavaScript.
multiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

multiplicationTable(num = 5); 