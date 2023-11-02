function checarNumero(Num){
  let number = Number(Num)
  if(Number.isNaN(number)){
    console.log("Por favor, Passe só números para o Programa")
  } else {
    return number
  }
}

checarNumero(5);
debugger
checarNumero("sadh")
debugger