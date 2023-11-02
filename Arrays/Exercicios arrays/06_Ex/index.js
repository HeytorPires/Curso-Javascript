//crie dois arrays, um com mais de 5 elementos e outro com menos; faça uma função que verifica o número de elementos; se possuir menos de 5, imprima "poucos elementos" no console; se tiver mais, imprima "muitos elementos"

let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4,5,6,7,8,9,0]

function test(arr1) {
    if( arr1.length > 5) {
        console.log("tem mais de 5 elementos")
    }   else {
        console.log("Não tem")
    }
}

test(arr2);
test(arr1);