let ObjetoA ={
    Cor: "azul",
    tipo: "eletronico",
    nome: "Capacitor",
    Quantidade: 10
}

let ObjetoB ={
    cor: "azul",
    nome: "Barramento",
    Quantidade: 10
}

let tipo = {
    tipo: "eletronico"
}

Object.assign(ObjetoB, tipo)
console.log(tipo)

//Função para transferencia de propriedade de objetos
//assign = "Atribuir"

//o objeto que vem primero é o que vai receber as propiedades e o segundo da onde vai tirar as propriedadeas