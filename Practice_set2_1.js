//Practice set 2_1.
//write a code can give grades to students according to their scores:
// A,80-100
// B,70-89
// C,60-69
// D,50-59
// F,0-49
let scores = prompt("Enter Your Score:-") ;
let grade;

if(scores >= 80 && scores <= 100){
    grade = "A";
}else if(scores >= 70 && scores <= 89){
    grade = "B";
}else if(scores >= 60 && scores <= 69){
    grade = "C";
}else if(scores >= 50 && scores <= 59){
    grade = "D";
}else if(scores >= 0 && scores <= 49){
    grade = "F";
}
console.log("according to your scores, your grade was:-",grade);