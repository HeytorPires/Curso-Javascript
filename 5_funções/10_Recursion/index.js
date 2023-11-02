function retornNumberoPar(n){
      if(n % 2 == 0){
         console.log("n agora é par: " + n)
      } else {
         console.log(n)
         retornNumberoPar(n - 1)
      }

}

retornNumberoPar(31);