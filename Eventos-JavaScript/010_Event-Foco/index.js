let input = document.querySelector("#input");

input.addEventListener("focus", function(){
  console.log("focus no input")
})  
input.addEventListener("blur", function(){
  console.log("Perdeu o foco")
})