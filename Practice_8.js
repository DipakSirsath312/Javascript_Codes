// We are given array of marks of students.Filter out of the marks of student that scored 90+.
let marks = [70,94,83,90,65,91];

newScore = marks.filter((marksStud) => {
   return marksStud >= 90;
        // if(marksStud >= 90){
        //     return marksStud
        // }
});

console.log(newScore);