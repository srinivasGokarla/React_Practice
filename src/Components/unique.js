let arr = ['1', "2", "3", "1", "2", "1","1"];

let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);

console.log(unique)

let ar = new Set(['1', "2", "3", "1", "2", "1","1"])
console.log(ar)

