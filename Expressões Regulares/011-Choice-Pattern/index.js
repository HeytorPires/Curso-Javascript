const frutas = /\d+ (banana|maças|laranja)/;


console.log(frutas.test("10 banana"));
console.log(frutas.test("10 melão"));
console.log(frutas.test("5 laranja"))