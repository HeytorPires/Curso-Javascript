//Crie uma função chamada removeDuplicates que recebe como parâmetro um array de elementos;A função deve remover os elementos duplicados do array, mantendo apenas as ocorrências únicas.



function removeDuplicates(arr) {
  let uniqueSet = new Set();

  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueSet.has(arr[i])) {
      uniqueSet.add(arr[i]);
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5, 5];
const arraySemDuplicatas = removeDuplicates(arrayComDuplicatas);
console.log(arraySemDuplicatas);