// Template Literals in JS.
// A way to have embedded expressions in strings.
let obj = {
    Name : "DipakSirsath",
    id : "dipaksirsath312",
    age : 22,
    from : "khetiya",
};
console.log("My Name is",obj.Name,"and im",obj.age,"Years Young Belong to",obj.from);

// String interpolation.
// To create strings by doing substitution of placeholders.
// `string text ${expression} string text`
 
let str2 = `My Name is ${obj.Name} and im ${obj.age} Years Young Belong to ${obj.from}`;
console.log(str2);
// console.log(`My Name is ${obj.Name} and im ${obj.age} Years Young Belong to ${obj.from}`);