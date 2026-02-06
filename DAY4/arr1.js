let names = ["atharva", "om", "veer", "samarth"];
console.log(`Names are = ${names}`);
console.log(`Names are = ${typeof names}`);
console.log(`Names at index 1 = ${names[1]}`);
console.log(`Type at index 1 = ${typeof names[1]}`);

console.log(`size of array = ${names.length}`);

let info = ["atharva kumbhar", 23, "Male", 55.5];

console.log(`Name = ${info[0]}`);
console.log(`Age = ${info[1]}`);
console.log(`Gender = ${info[2]}`);
console.log(`Weight = ${info[3]}`);

// On Nov -> age will change to 26
//Array are mutable

info[1] = info[1]++;
console.log(`Updated Age = ${info[1]}`);
info[0] = "om g";
info[2] = "Female";
console.log(`Array = ${info}`);