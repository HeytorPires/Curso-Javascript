const ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("123"));
console.log(ano.test("12323"));
console.log(ano.test("20232") & "20232".length == 5);
console.log(ano.test("2023") & "2023".length == 5);

const Palavratresletras = /\w\w\w/; // se a palavra tem no minimo 4 letras
console.log(Palavratresletras.test("olei"));
console.log(Palavratresletras.test("alou"));
console.log(Palavratresletras.test("al"));
console.log(Palavratresletras.test("olá"));