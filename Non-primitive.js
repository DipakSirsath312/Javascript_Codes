// Non-Primitive Datatypes
// object(Arrays,Functions)
const student = {
    Fname : "Hinata",
    age : 22,
    village : "leaf village",
    cgpa : 9.5,
    isFollow : true
};
console.log(student.Fname);
console.log(student.age);
console.log(student.village);
console.log(student.cgpa);
console.log(student.isFollow);

student["Fname"] = "Miss makima";
console.log(student["Fname"]);
student["age"] = student["age"] + 5;
console.log(student["age"]);