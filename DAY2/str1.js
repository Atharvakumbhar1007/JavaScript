let msg = "Hello Today I am learning JavaScript";
console.log(msg);
console.log(typeof msg);

msg = "Hello Today I am \"learning JS\"";
// Fixed the error by properly escaping the double quotes
console.log(msg);
console.log(typeof msg);

msg = 'Hello Today I am "learning JS"';
console.log(msg);
console.log(typeof msg);

msg = `Hello Today I am 'learning JS'`;
console.log(msg);
console.log(typeof msg);