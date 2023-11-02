let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");

function msg (e){
    console.log(e)
}

btn1.addEventListener("click", msg)

btn2.addEventListener("click", function(event){
    btn1.removeEventListener(event)
})