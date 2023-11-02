function Cachorro(nome,raca ,cor){
    this.nome = nome;
    this.raca = raca;
    this.cor = cor;
}

Cachorro.prototype.uivar = function(){
    console.log("Auuuu")
}

let Ben = new Cachorro("Ben", "fila Brasileiro", "preto")

console.log(husky)

Ben.uivar()