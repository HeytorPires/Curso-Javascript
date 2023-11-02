//Crie uma classe que simule um Carro;
//Propriedades: Marca, Cor, Gasolina Restante;
//Crie um Método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
//e um Abastecer para aumentar a Gasolina Quando Necessário;

class Carro {
    constructor(Marca, Cor, GasolinaRestante) {
        this.Marca = Marca
        this.Cor = Cor
        this.GasolinaRestante = GasolinaRestante
    }
    Dirigir(distancia) {
        for (let i = 0; i < distancia; i++) {
            if (this.GasolinaRestante > 0) {
                this.GasolinaRestante -= 0.1; // Consumo fictício por quilômetro, você pode ajustar esse valor conforme necessário
            } else {
                console.log("O carro ficou sem gasolina.");
                break;
            }
        }
        console.log(`Dirigiu ${distancia} quilômetros. Gasolina restante: ${this.GasolinaRestante.toFixed(2)} litros.`);
    }
    Abastecer(litros) {
        this.GasolinaRestante += litros;
        console.log(`Abasteceu ${litros} litros. Gasolina restante: ${this.GasolinaRestante.toFixed(2)} litros.`);
    }
}

let carro = new Carro("Fiat", "Preto", 50);
console.log(carro);

carro.Dirigir(20); 
carro.Abastecer(30);
carro.Dirigir(20); 

console.log(carro);

