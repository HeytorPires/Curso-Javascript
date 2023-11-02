// Crie um objeto calculadora; Que tem os seguintes métodos: Somar, Subtrair, Multiplicar e dividir; Os métodos só devem aceitar dois parâmetros; utilize cada um dos métodos e imprima os valores no console.

const calculadora = {
    Somar : function(x, y) {
        let resultado = x + y
        console.log(`a soma de ${x} por ${y} é de ` + resultado)
    },

    Subtração : function(x, y) {
        let resultado = x - y
        console.log(`a subtração de ${x} por ${y} é de ` + resultado)
    },

    multiplicação : function(x, y) {
        let resultado = x * y
        console.log(`a multiplicação de ${x} por ${y} é de ` + resultado)

    },
    Divisão : function(x, y) {
        let resultado = x / y
        console.log(`a divisão de ${x} por ${y} é de ` + resultado)
    }
}

calculadora.Somar(1,2)
calculadora.Subtração(10,1)
calculadora.multiplicação(4,7)
calculadora.Divisão(10,5)