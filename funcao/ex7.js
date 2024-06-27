//Crie uma função que receba uma array como parâmetro e retorne a soma de todos os números da array.

const arr = [1, 2, 3, 4, 5];
let result = 0;

function soma() {
  for (i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  console.log(result);
}

soma(arr);
