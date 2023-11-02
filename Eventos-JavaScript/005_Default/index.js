document.addEventListener("DOMContentLoaded", function() {
    let a = document.querySelector("#link");
  
    if (a) { // Verifica se o elemento foi encontrado
      a.addEventListener("click", function(event){
          event.preventDefault();
          console.log("não ira ir")
      });
    }
  });
  