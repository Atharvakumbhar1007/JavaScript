//Map

let arr = [1, 6, 4, 5, 10, 77];

let cubeArr = arr.map((element) => element ** 3);

console.log(cubeArr);
console.log(arr);

const student = [
    {
        rollNo: 1,
        name: "OM",
        percentage: 85.95,
    },
    {
        rollNo: 2,
        name: "YASH",
        percentage: 65.95,
    },
    {
        rollNo: 3,
        name: "RIYA",
        percentage: 95.95,
    },
    {
        rollNo: 4,
        name: "SAKSHI",
        percentage: 96.95,
    },
    {
        rollNo: 5,
        name: "ATHARVA",
        percentage: 35.95,
    },
];
// I want to create a new array with CGPA included -> percentage / 10
//SPREAD Operator -> FOR COPY (...)
const studentsWithGpa = student.map((student) => {
    //console.log(student);
    studentCopy = { ...student }; //copy stident data so original object won't be modified
    studentCopy["CGPA"] = student["percentage"] / 10;
    return studentCopy;
});

console.log("WITH GPA");
console.log(studentsWithGpa);
console.log(student);
console.log("Only Student Arrays");