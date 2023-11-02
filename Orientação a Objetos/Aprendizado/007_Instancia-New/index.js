function Cachorro (raca,nome,cor,patas){
    this.raca = raca;
    this.nome = nome;
    this.cor = cor;
    this.patas = patas;
    this.uivar = function(){
        console.log("Auuuuuuuuuuuuuu!")
    }
}
let husky = new Cachorro("Husky", "benjamin", "preto", 3, "uivar")

console.log(husky)
husky.uivar()