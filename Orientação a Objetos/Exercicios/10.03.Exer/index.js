

class Account {
  constructor(ID_Account, Bank_Balance) {
    this.ID_Account = ID_Account;
    this.Bank_Balance = Bank_Balance;
  }
  Bank_deposit(valor) {
    this.Bank_Balance  += valor
    console.log("voce depositou " + valor, "Nesta operação, saldo atual " + this.Bank_Balance)
  }



  Bank_Withdraw(valor) {
    if (this.Bank_Balance >= valor) {
     this.Bank_Balance -= valor
      console.log("Saque aprovado e efetuado, lhe restam " + this.Bank_Balance)
    } else {
      const falta = valor - this.Bank_Balance
      console.log("Saldo insuficiente, ainda faltam " + falta)
    }
  }

  Bank_Query() {
    return this.Bank_Balance
  }
}
const conta = new Account(90310238, 1400)
console.log(conta)
conta.Bank_Withdraw(700)
conta.Bank_deposit(200)
const SaldoFinal = conta.Bank_Query();
console.log(`o valor retornado é: ${SaldoFinal}`)



