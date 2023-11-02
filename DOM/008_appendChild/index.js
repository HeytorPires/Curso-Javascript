let Novoelemento = document.createElement("p");
let texto = document.createTextNode("Mudei aqui1");

Novoelemento.appendChild(texto);

 let p = document.querySelector("#Footer");
 let pai = p.parentNode;

 pai.appendChild(Novoelemento);