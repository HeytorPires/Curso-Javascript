window.addEventListener("keydown", function (e) {

  if (e.key == "v") {
    console.log("voce Voce apertou v")
  } else if (e.key == "Enter") {
    console.log("Espere um pouco")
  } else if (e.key == "Backspace") {
    console.log("akakkakakakakaka, backspace?")
    console.log("da logo um alt + f4")
  }
})

window.addEventListener("keyup", function(e){
  if(e.key == "Enter"){
    console.log("Voce soltou o enter")
  }
})

