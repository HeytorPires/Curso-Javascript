const QueryPhone = /\d{4,5}-\d{4}/;
//validação de telefone, entre Chaves, está os parametros de digitos para a expressão regular (ReGex)

console.log(QueryPhone.test("4004-5050"));
console.log(QueryPhone.test("98765-8080"));
console.log(QueryPhone.test("99999-09"));;

const QueryHappyBirthday = /\d{2}-\d{2}-\d{4}/;

console.log(QueryHappyBirthday.test("28-09-2005"));
console.log(QueryHappyBirthday.test("29-9-2005"))

const  QueryHappyBirthday2 = /\d{1,2}-\d{1,2}-\d{4}/;

console.log(QueryHappyBirthday2.test("29-9-2005"))