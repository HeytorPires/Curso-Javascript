const ValidarNascimento =/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(ValidarNascimento.test("25/12/2005"));
console.log(ValidarNascimento.test("2/12/2007"));
console.log(ValidarNascimento.test("22/2/2005"));
console.log(ValidarNascimento.test());