let p = Promise.resolve(5);
console.log("outros Códigos");
console.log(p);
p.then((value) => {console.log(` Valor é ${value}`)})
