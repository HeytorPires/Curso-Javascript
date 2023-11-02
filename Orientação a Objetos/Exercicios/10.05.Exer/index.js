class Book {
  constructor(Title, Author, available) {
    this.Title = Title
    this.Author = Author
    this.available = available
  }

  Emprestar() {
    if (this.available == true) {
      console.log("o livro está livre, vou reservar a voce")
      this.available = false
    } else {
      console.log("o livro não está disponivel no momento")
    }
  }

  Devolver() {
    if (this.available == false) {
      console.log("Obrigado por devolver o livro")
      this.available = true
    }
  }
  Consultar_Dispo() {
    return this.available
  }
}

const PequenoPrincipe = new Book("pequeno principe", "Nicolas maquiavél", false)
console.log(PequenoPrincipe)
const consultar = PequenoPrincipe.Consultar_Dispo();
console.log(consultar)
console.log(PequenoPrincipe.Emprestar())
console.log(PequenoPrincipe.Devolver())

