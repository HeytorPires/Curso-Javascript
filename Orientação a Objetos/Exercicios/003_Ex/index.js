//crie um objeto que simula um endereço de um cliente;
//propriedades: Rua, bairro, cidade e Estado;
//No constructor o ensderejo já deve ser definido por completo;
//Crie métodos para atualizar todas as propriedades;

class AddresClient {
    constructor(Street, Neighborhood, City, State) {
        this.Street = Street
        this.Neighborhood = Neighborhood
        this.City = City
        this.State = State
    }
    set newStreet(newStreet) {
        this.Street = newStreet;
    }
    set newNeighborhood(newNeighborhood) {
        this.Neighborhood = newNeighborhood;
    }
    set newCity(newCity) {
        this.city = newCity;
    }
    set newState(newState) {
        this.State = newState;
    }
}

addresclient = new AddresClient("monsenhor", "BIM", "mga", "PR");

console.log(addresclient);

AddresClient.newStreet = "Tulipa"
AddresClient.newNeighborhood = "Industrial"
AddresClient.newCity = "Painçandu"
AddresClient.State = "Santa Catarina"

console.log(addresclient)