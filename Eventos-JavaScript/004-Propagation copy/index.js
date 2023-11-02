let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let p = document.querySelector("p")

function msg (e){
    console.log("Clicou no button")
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function(event){
    btn1.removeEventListener(event)
})

p.addEventListener("click", function(){
    console.log("cliclou no paragrafo")
})