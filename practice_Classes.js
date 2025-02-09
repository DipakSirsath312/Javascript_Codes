// Your are creating a website for your college.Create a class User with 2 properties,
// name and email.it also has a method called viewData() that allows user to view website data.
let Data = "Personal informantion";
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`userName: ${this.name}`);
        console.log(`emailId: ${this.email}`);
        console.log(`Data:- ${Data}`);
    }
}
let objuser = new user("Dipak Sirsath","dipaksirsath312@gmail.com");
objuser.viewData();
let objuser2 = new user("Ishwar Bachhav","ishwarBachhav@gmail.com");
objuser2.viewData();

// Create new class called Admin which inherits from user.Add a new method
// called editDate to Admin taht allows it to edit website data. 
class Admin extends user{
    constructor(name,pass){
        super(name,pass);
        this.Name = name;
        this.Pass = pass;
        Data = "some new value";
    }
    editData(){
        console.log(`AdminName:- ${this.Name}`);
        console.log(`AdminPass:- ${this.Pass}`);
        console.log(Data);
    }
}
let objuser3 = new Admin("harshalTamboli","@1234");
objuser3.editData();
let objuser4 = new Admin("YogeshBad","@00001");
objuser4.editData();
