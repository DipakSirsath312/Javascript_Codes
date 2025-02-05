// Prototypes in Js.
/* A javascript object is an entity having state and behavior (properties and method).
   Js objects have a special property called prototype.
   We can set prototype using __proto__ 
*/

// For Example :-
const stud = {
    fullName : "Dipak Sirsath",
    Add : "Khetiya",
    class : "TYBCA",
    marks : 70,
    
    info : function() {
        console.log("Student Name :-",this.fullName);
    },
}; 
console.log(stud);
console.log(stud.info());
 
// Example 2 :-
const emp = {
    calTax1(){
        console.log("tax rate is 10%")
    },
};
console.log(emp.calTax1());

const karanArjun = {
    salary : 40000,
};

karanArjun.__proto__ = emp;
console.log(karanArjun);
console.log(karanArjun.calTax1());

// Example 3 :-
const fresher = {
    dipak : 25000,
    printSalary(){
        console.log(`fresher salary is ${this.dipak}`);
    },
    calTax2(){
        console.log("tax rate is 20%")
    }
};

fresher.__proto__ = karanArjun;
console.log(fresher.printSalary());
console.log(fresher.calTax2());
console.log(fresher);