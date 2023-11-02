class flight {
  constructor(ID_Flight, Origin, Destiny, Available_Seats) {
    this.ID_Flight = ID_Flight
    this.Origin = Origin
    this.Destiny = Destiny
    this.Available_Seats = Available_Seats
  }
  reserve_seat(Quantidade) {
    if (this.Available_Seats >= 1) {
      console.log("Há " + this.Available_Seats, "assentos disponivel, acabei de reservar a voce " + Quantidade)
      this.Available_Seats -= Quantidade
    }
  }
  Query_SeatAvailable() {
    return this.Available_Seats
  }
}

const voo = new flight(901901, "São Paulo", "Ceará", 80)

voo.reserve_seat(20)

const DispoAss = voo.Query_SeatAvailable();
console.log("há " + DispoAss, "assentos disponíveis, ainda")