let objetoa = {
    nome:"heytor",
    idade: 19
}

let pessoa001 = objetoa

console.log(objetoa == pessoa001)

console.log(pessoa001)

objetoa.idade = 17 //exemplo de mutabilidade

console.log(pessoa001)

console.log(objetoa == pessoa001)

//Passa as propriedades de um objeto para outro objeto novo.