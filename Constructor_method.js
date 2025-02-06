// Constructor method is:
// automatically invoked by new
// initializes object
class Car{
    constructor(brand,speed,mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.speed = speed;
        this.mileage = mileage;
    }
}

let obj = new Car("fortuner",290,100);
console.log(obj);

let toyota = new Car("lexus",300,90);
console.log(toyota);