const palavrasem123 = /[^123]/;
const NoteAB = /[^ab]/;

console.log(palavrasem123.test("1122"));
console.log(palavrasem123.test("14"));
console.log(palavrasem123.test("1"));

console.log(NoteAB.test("olá bruno"))
console.log(NoteAB.test("acde"))
console.log(NoteAB.test("abcde"))