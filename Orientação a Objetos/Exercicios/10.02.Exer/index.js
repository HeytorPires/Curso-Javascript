class retangule {
  constructor(largura, altura,) {
    this.largura = largura;
    this.altura = altura;

  }

  CalcularArea() {
    const resultado = this.altura * this.largura
    console.log("O Resultado da area é : " + resultado)
  }
  CalcularPerimetro() {
    const ResultadoPerimetro = (2 * (this.altura + this.largura))
    console.log("O resultado do perimetro é de " + ResultadoPerimetro)

  }
}

const Retangulo = new retangule(10, 15)

Retangulo.CalcularArea()

Retangulo.CalcularPerimetro()
