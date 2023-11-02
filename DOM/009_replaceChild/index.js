let newheding = document.createElement("h1");
let texto = document.createTextNode("Mudou aqui")

newheding.appendChild(texto)

let heading = document.querySelectorAll("#old-heading")
let paiheading = heading.parentNode

paiheading.replaceChild(Novoelemento, heading);