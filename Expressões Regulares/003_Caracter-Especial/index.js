// "\d" qualquer caracter 
// "\w" um caracter alfanumérico ("teste")
// "\s" Qualquer Caractere de espaço em branco
// "/D" caracteres que não são dígitos
// "\W"caractere não alfanumérico
// "\S" Caractere que não sej espaço em branco
// "." Qualquer caractere, menos nova linha


// Declarando variaveis 

const qualquerCarac = /\d/
const AlfNum = /\w/
const Space = /\s/
const NoNum = /\D/
const NoAlfaNum = /\W/
const NoSpace = /\S/
const allCnoROw = /./

// Testando as Variaveis com RegEx

console.log(qualquerCarac.test("#@!"));
console.log(qualquerCarac.test(""));

console.log(AlfNum.test("olá123"));
console.log(AlfNum.test("123"));
console.log(AlfNum.test("olá"));

console.log(Space.test("  "))
console.log(Space.test("akosnoshioafsh"))

console.log(NoNum.test("qwpioueqwqprou"))
console.log(NoNum.test("12311234124"))

console.log(NoAlfaNum.test("123asfas"))
console.log(NoAlfaNum.test("!@#"))

console.log(NoSpace.test(""))
console.log(NoSpace.test("oisdbangowbgosd"))

console.log(allCnoROw.test("foishogdbngo"))