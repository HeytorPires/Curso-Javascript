// Adcione a propriedade Janelas no onius, com valor 20; delete a propriedade no onibus; imprima a propriedade janelas no console.

let Onibus = {
    Rodas : 8,
    Limitedepassageiros : 40,
    Portas : 2
} 

delete Onibus.Rodas

Onibus.Janelas = 40

console.log(Onibus)
console.log(Onibus.Janelas)
