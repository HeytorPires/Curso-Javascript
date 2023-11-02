//Crie um array a partir de uma frase; Imprima cada palavra do array no console por meio de um for;

const frase = "testando o metodo split"

const arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++){
    console.log(arrFrase[i])
}