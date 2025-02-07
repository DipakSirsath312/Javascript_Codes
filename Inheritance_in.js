// inheritance is passing down properties and methods from parent class to child class.
class Parent{
    start(){
        console.log("Hello world");
    }
}
class child extends Parent{
    begin(){
        console.log("hii i am Dipak");
    } 
}

let obj = new child()
obj.start()
obj.begin()
// example 2
class lifeStyle{
    eat(){
        console.log("Morning = eat");
    }
    sleep(){
        console.log("sleep");
    }
    overthinking(){
        console.log("alone");
    }
}
class Programmer extends lifeStyle{
    work(){
        console.log("Error, problem solving and build something");
    }
    peace(Anime,Music){
        this.music = Music;
        this.anime = Anime;
        console.log("music =",this.music,);
        console.log("anime =",this.anime);
    }
}
// if child and parent have same method.child's
// method will be used.[Method Overriding].
class Eng extends Programmer{
    work(){
        console.log("Team leader"); //Method Overriding.
    }
}

let dipakObj = new Programmer();
dipakObj.eat();
dipakObj.work();
dipakObj.overthinking();
dipakObj.peace("NarutoShippuden,AttackonTitan and much more..","myplayList,goldenEra");
dipakObj.sleep()

let objEng = new Eng();
objEng.work();