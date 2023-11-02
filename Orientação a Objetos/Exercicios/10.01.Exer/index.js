class WordCounter {
  constructor() {

  }
  countWords(texto) {
    const palavras = texto.trim().split(/\s+/);
    return palavras.length;
  }
}

let texto = "tudo bem pessoal, tudo bem colaboradores?"
const contador = new WordCounter();
console.log(contador.countWords(texto))



/*
const texto = "Isso é um exemplo de contador de palavras em JavaScript.";
const numeroDePalavras = contarPalavras(texto);
console.log(`Número de palavras: ${numeroDePalavras}`);
*/