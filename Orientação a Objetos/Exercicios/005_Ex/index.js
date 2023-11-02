//crie uma class conta bancaria;
// com as propriedades de saldo na conta corrente, saldo na conta poupança e juros de poupança;
//crie os métodos de depósito e saque , também um método para transferir dinheiro da poupança para a conta corrente;
// além disso crie uma conta especial que herda da conta normal;
// conta especial os juros são dobrados da conta normal;



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

  TransferenciaC(valor) {
    this.SaldoContaPoupança += valor
    this.SaldoContaCorrente -= valor
    console.log(this.SaldoContaCorrente)
  }
  TransferenciaP(valor) {
    this.SaldoContaCorrente += valor
    this.SaldoContaCorrente -= valor
    console.log(this.SaldoContaCorrente)
  }

}


let contaBancária = new ContaBancária(1000, 600, 0, 12)

contaBancária.saqueP(500)

contaBancária.depositoP(1000)

contaBancária.SaldoContaPoupança



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
}

let Contaespecial = new ContaEspecial (120, 10, 0, 12)

console.log(Contaespecial)

