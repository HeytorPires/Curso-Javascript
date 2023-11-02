let carro = {
    marca: "BMW",
    Portas: 4,
    eletrico: true,
    motor: 2.5
}

console.log(carro)

delete carro.eletrico;

carro.combustão = true

console.log(carro.eletrico)
console.log(carro.combustão)