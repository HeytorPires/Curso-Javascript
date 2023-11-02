// Teste debugger

class ContaBancária {
  constructor(SaldoContaCorrente, SaldoContaPoupança, JurosDaPoupança, TaxaDeJuros) {
    this.SaldoContaCorrente = SaldoContaCorrente;
    this.SaldoContaPoupança = SaldoContaPoupança;
    this.JurosDaPoupança = JurosDaPoupança
    this.TaxaDeJuros = TaxaDeJuros
  }
  depositoC(Valor) {
    this.SaldoContaCorrente += Valor
  }

  saqueC(Valor) {
    this.SaldoContaCorrente -= Valor
  }

  //Conta Poupança

  depositoP(Valor) {
    this.SaldoContaPoupança += Valor
  }

  saqueP(Valor) {
    this.SaldoContaPoupança -= Valor
  }

  //juros

  CalcularJuros() {
    this.JurosDaPoupança = this.SaldoContaPoupança + 0.08 * this.SaldoContaPoupança
    console.log(this.JurosDaPoupança)
  }

  //Transferencia

  Transferencia() {
    this.SaldoContaCorrente += this.SaldoContaPoupança
    console.log(this.SaldoContaCorrente)
  }

}


let contaBancária = new ContaBancária(1000, 600, 0, 12)

contaBancária.saqueP(500)

contaBancária.depositoP(1000)

contaBancária.SaldoContaPoupança

debugger;

contaBancária.Transferencia()
console.log(contaBancária.SaldoContaCorrente)

class ContaEspecial extends ContaBancária {
  constructor(SaldoContaCorrente, SaldoContaPoupança, JurosDaPoupança, TaxaDeJuros) {
    super(SaldoContaCorrente, SaldoContaPoupança, JurosDaPoupança, TaxaDeJuros )
   
  }
  depositoC(Valor) {
    this.SaldoContaCorrente += Valor
  }

  saqueC(Valor) {
    this.SaldoContaCorrente -= Valor
  }

  //Conta Poupança

  depositoP(Valor) {
    this.SaldoContaPoupança += Valor
  }

  saqueP(Valor) {
    this.SaldoContaPoupança -= Valor
  }

  //juros

  CalcularJuros() {
    this.JurosDaPoupança = this.SaldoContaPoupança + 0.16 * this.SaldoContaPoupança
    console.log(this.JurosDaPoupança)
  }

  //Transferencia

  Transferencia() {
    this.SaldoContaCorrente += this.SaldoContaPoupança
    console.log(this.SaldoContaCorrente)
  }


}

let Contaespecial = new ContaEspecial (120, 10, 0, 12)
  debugger;
console.log(Contaespecial)

