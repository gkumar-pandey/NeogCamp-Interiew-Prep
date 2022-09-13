var read = require("readline-sync");
const ListOfstudents = [];

for (let i = 0; i < 5; i++) {
  let name = read.question("Enter Name of Student : ");
  let unitTestMarks = parseInt(read.question("Enter Unit test Marks : "));
  let preFinalMarks = parseInt(read.question("Enter Pre Final Marks : "));
  let finalMarks = parseInt(read.question("Final Marks : "));

  let obj = {
    name: name,
    unitTestMarks: unitTestMarks,
    preFinalMarks: preFinalMarks,
    finalMarks: finalMarks,
    totalMarks: unitTestMarks + preFinalMarks + finalMarks,
    avgMarks: (unitTestMarks + preFinalMarks + finalMarks) / 3,
  };
  ListOfstudents.push(obj);
}

//  for highest marks
const TotalMarksArr = ListOfstudents.map((item) => item.totalMarks);
const idxOfMaxMarks = TotalMarksArr.indexOf(Math.max(...TotalMarksArr));
console.log(`...........................................`);
console.log(`${ListOfstudents[idxOfMaxMarks].name} got highest Marks `);
console.log("******************************************");
console.log("Average Marks : ");

ListOfstudents.forEach((student) => {
  console.log(`${student.name} : ${student.avgMarks}`);
});
