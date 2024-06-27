//Crie uma função que receba um número como parâmetro. A função deve gerar um número aleatório e usar
//o número do parâmetro como valor máximo de aleatoriedade.

let alet = 0;

function aleatorio(numero) {
  alet = Math.floor(Math.random() * numero);
  console.log(alet);
}

aleatorio(20);
