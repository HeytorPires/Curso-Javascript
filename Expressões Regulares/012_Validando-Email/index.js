const ValidarEmail = /\w+@\w+\.\w+/;

console.log(ValidarEmail.test("teste@emaill.com"));
console.log(ValidarEmail.test("teste@emaill"));
console.log(ValidarEmail.test("teste@yaho.com.br"));
console.log(ValidarEmail.test("emaill.com"));