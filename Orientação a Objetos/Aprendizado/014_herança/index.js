class Cachorro {
    constructor(nome, cor){
        this.nome = nome;
        this.cor = cor;
    }
    latir(){
        console.log("AUAU")
    }
   
}

let pastor = new Cachorro("billy ", "sem cor");

console.log(pastor.cor)

class Gato extends Cachorro{
    constructor(raca, nome){
        super(nome, nome )
        this.raca = raca
    }
    latir(){
        console.log("Au Au")
    }
}

let simeon = new Gato("siames", "billu")

console.log(simeon.nome)

