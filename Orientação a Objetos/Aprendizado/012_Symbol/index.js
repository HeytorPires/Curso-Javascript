

class Cachorro {
    constructor(raca, cor, nome){
        this.raca = raca;
        this.cor = cor;
        this.nome = nome;
    }
    latir(){
        console.log("Au AU")
    }
}

Cachorro.prototype.patas = 4
let pug = new Cachorro("pug", "preto", "godosão")

let patas = Symbol();
Cachorro.prototype[patas] = 4

console.log(pug)

console.log(pug.patas)
    
pug.latir()

//acessando o symbol

console.log(Cachorro.prototype[patas]);