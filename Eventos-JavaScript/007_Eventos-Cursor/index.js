document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.querySelector("#btn-1");
  let btn2 = document.querySelector("#btn-2")

  btn1.addEventListener("mousedown", function () {
    console.log("voce ativou o  click")
  })
  btn1.addEventListener("mouseup", function () {
    console.log("Voce soltou o click")
  })
  btn2.addEventListener("dblclick", function () {
    console.log("clicou duas vezes")
  })
});


  