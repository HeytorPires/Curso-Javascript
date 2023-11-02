const opcional = /prova\s?\d?/;

console.log(opcional.test("prova"));
console.log(opcional.test("prova 1"));
console.log(opcional.test("prova 2"));


const NoNumAndSpace = /\D?\S?/

console.log(NoNumAndSpace.test("Eu heytor"))
console.log(NoNumAndSpace.test("1223and"))