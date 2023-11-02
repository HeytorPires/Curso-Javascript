let idade = 17
let cnh = false

if(idade >= 18 && cnh == true){
    console.log("tudo nos confromes, liberado")
} else if (idade >= 18 && cnh == false){
    console.log("engraçadinho, acha que tem maioridade já pode por ai fazendo o que quiser? está preso")
} else if (idade < 18 && cnh == true ){
    console.log("acha mesmo que isso é possivel? preso em flagrante!")
} else if (idade < 18 && cnh == false){
    console.log(" tá fazendo o que ai menor?")
}