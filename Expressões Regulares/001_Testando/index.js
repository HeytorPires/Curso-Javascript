const reg1 = new RegExp("bola")

console.log(reg1.test("tem bola/?"))
console.log(reg1.test("não tem"))

//ou 


const reg2 = /bola/; 

console.log(reg2.test("aosdnoanoasfnfoasf, bola"))

console.log(/quadrado/.test("onde está esse quadrado!"))