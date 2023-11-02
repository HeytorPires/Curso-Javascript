//Escreva uma função chamada sumUniqueNumbers que recebe um array de números como argumento;A função deve calcular e retornar a soma de todos os números que aparecem apenas uma vez no array;Utilize uma estrutura de dados auxiliar para armazenar a contagem de cada número no array;Percorra o array e verifique se cada número ocorre apenas uma vez; Se sim, some-o à variável de soma;Considere que o array pode conter tanto números inteiros positivos quanto negativos.

let arr = [1,2,3,4,4,5,-10]
function sumUniqueNumbers(arr) {
    let numberCount = {};
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (numberCount[num]) {
        numberCount[num]++;
      } else {
        numberCount[num] = 1;
      }
    }
  
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (numberCount[num] === 1) {
        sum += num;
      }
    }
  
    return sum;
  }
  let numbers = [2, 3, 2, 5, 6, 5, 7];
  let uniqueSum = sumUniqueNumbers(numbers);
  console.log("A soma dos números únicos é:", uniqueSum);