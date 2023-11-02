class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("AUAU")
    }
    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor;
    }
}

let pastor = new Cachorro("pastor alemão ", "sem cor");

console.log(pastor)

pastor.setCor = "marrom"

console.log(pastor.getCor)