const carro ={
   "Marca" : "BMW",
   "Rodas" : 4,
   "portas" : 2,
   "tipo" : "sedan"
}

let JsonToString = JSON.stringify(carro)

console.log(JsonToString)

let StringToJson = JSON.parse(JsonToString)

console.log(StringToJson);
/*  
Esse Exercicio aborda sobre a conversa de Json para string
e string para json.
This exercice talk about conversion Json for string and string for json
*/