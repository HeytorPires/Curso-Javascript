let Novoelemento = document.createElement("p");
let texto = document.createTextNode("algum Texto");

Novoelemento.appendChild(texto);

let elementoAlvo = document.querySelector("#title-principal");
let elementoPai = document.querySelector("#div-1");

elementoPai.insertBefore(Novoelemento, elementoAlvo);