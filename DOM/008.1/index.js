let Novoelemento = document.createElement("h1");
let mensagem =  document.createTextNode("Titulo inserido");

Novoelemento.appendChild(mensagem)

let p = document.querySelector("#div-1");
let pai = p.parentNode;

pai.appendChild(Novoelemento);