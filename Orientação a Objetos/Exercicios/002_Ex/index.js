// cria uma classe que simula um carrinho de compras de um e-commerce; propridades itens, quanidade total, valor total; crie os métodos para adcionar e remover itens.


class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {
        let itemExistente = this.itens.find(itemCarinho => itemCarinho.id === item.id);

        if (itemExistente) {
            itemExistente.qtd += item.qtd;
        } else {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removeItem(itemId, qtd) {
        let itemIndex = this.itens.findIndex(item => item.id === itemId);

        if (itemIndex !== -1) {
            if (this.itens[itemIndex].qtd <= qtd) {
                this.qtd -= this.itens[itemIndex].qtd;
                this.valorTotal -= this.itens[itemIndex].preco * this.itens[itemIndex].qtd;
                this.itens.splice(itemIndex, 1);
            } else {
                this.itens[itemIndex].qtd -= qtd;
                this.qtd -= qtd;
                this.valorTotal -= this.itens[itemIndex].preco * qtd;
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);


carrinho.addItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(carrinho);

//carrinho.removeItem(1, 1); // Remove 1 unidade da Camisa
//console.log(carrinho);