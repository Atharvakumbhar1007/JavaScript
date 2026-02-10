//Objects using object literals
const student = {
    rollNo: 1,
    name: "SPRK Tech",
    gender: "Female",
    marks: [85, 95, 75, 95],
    isActive: true,
};
console.log(student);
console.log("Name = ", student.name);
console.log("Name = ", student["name"]);
console.log("Roll No= ", student["roll No"]);

let username = "name";

console.log("Name = ", student.username);//underfined
//it treat username as key
console.log("Name with brackets= ", student[username]); //undefined