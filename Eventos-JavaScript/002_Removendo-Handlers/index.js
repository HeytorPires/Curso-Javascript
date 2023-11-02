let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");

function msg (){
    console.log("cliclou em mim")
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function(){
    btn1.removeEventListener("click", msg)
})