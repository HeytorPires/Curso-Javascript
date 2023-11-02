const Marca = /\ (Nike|Adidas|Puma|Asics)/;

console.log(Marca.test(" Puma"))
console.log(Marca.test(" Nike"))
console.log(Marca.test(" Asics"))
console.log(Marca.test(" Adidas"))

console.log(Marca.test(" Fila"))