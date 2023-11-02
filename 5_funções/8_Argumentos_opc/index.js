function nomeComIdade(nome, idade){
   if(idade === undefined){
      console.log("seu nome é " + nome);
   } else{
      console.log("seu nome é " + nome + " e voce tem " + idade + " anos")
   }
}

nomeComIdade("Heytor")
nomeComIdade("joão", 42)