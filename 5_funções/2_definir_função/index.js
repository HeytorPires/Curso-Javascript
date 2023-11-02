

function testeMaiorNumero(a,b){
    if(a > b){
        console.log("A é maior")
    } else if(a == b) {
        console.log(" A e B são iguais")
    } else{
        console.log("B é maior")
    }   
}

let i = 20
let u = 22
const Maior = testeMaiorNumero
 console.log(Maior(u,i))

function Podedirigir(Idade, Cnh){
    if(idade => 18 && Cnh == true ){
        console.log("pode dirigir")
    } else {
        console.log("não pode digirir")
    }
}

const Carteira = Podedirigir

console.log(Carteira(19, true))