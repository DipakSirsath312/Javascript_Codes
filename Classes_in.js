// Classes in Js.
/* Class is a program-code template for creating objects.
   Those objects will have some state (variable) & some behaviour (function) inside it.
*/
class carToyota {
   start(){
      console.log("start");
   }
   stop(){
      console.log("stop");
   }
   
   setBrand(brand){
      this.brandName = brand;
   }
}
let Fortuner = new carToyota()
Fortuner.start()
Fortuner.stop()
Fortuner.setBrand("innova"); 

let lexus = new carToyota()
lexus.start()
lexus.stop()
lexus.setBrand("lexus");