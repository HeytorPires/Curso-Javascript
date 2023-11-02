const MuitosOuPoucosDigitos = /\d+/;

console.log(MuitosOuPoucosDigitos.test("123"));
console.log(MuitosOuPoucosDigitos.test("123345679"));
console.log(MuitosOuPoucosDigitos.test(""));
