// super keyword.
/* The super keyword is used to call the constructor of it's parent
   class to access the parent's properties and methos.
*/
class Parent{
    constructor(Name){
        console.log("Parent Constructor");
        this.hello = "Ram ram";
        console.log(this.hello);
        this.name = Name;
        console.log(this.name);
    }
    work(){
        console.log("work,eat,sleep");
    }
}
class Child extends Parent{
    constructor(Name,branch){
        console.log("child Constructor");
        super(Name); // to invoke parent class constructor 
        this.branch = branch;
        console.log(this.branch);
        console.log("Exit constructor");
    }
    cringe(){
        super.work();
        console.log("hello world");
    }
}

let objChild = new Child("dipak","Webdev");
objChild.cringe();