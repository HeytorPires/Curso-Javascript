function criacachorro (raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criacachorro("doberman", 4, "preto")
console.log(doberman)
