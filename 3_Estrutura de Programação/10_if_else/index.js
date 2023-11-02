let nome = "claudiomar"

if(nome == undefined){
    console.log("nome disponivel")
}else if(nome == "heytor" && nome.length > 5){
    console.log("nome permitido")
} else if(nome == "claudiomar" && nome.length > 7) {
    console.log("já existente")
} 

let A = 10
let B = 15

if(A + B == 30){
    console.log("resultado é 30")
} else if( A + B == 27 ){
    console.log("resultado é 27")
} else if (A + B == 25) {
    console.log("tá certo")
} else{
    console.log("tá tudo errado")
}
