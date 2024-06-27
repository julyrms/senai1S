const prompt = require("prompt-sync")();

//Crie uma função que recebe um número como parâmetro e retorne o número elevado ao quadrado.
//Exiba no console o retorno da função.

function conta(numero) {
  return "O valor ao quadrado é: " + numero * numero;
}

let ask = conta(Number(prompt("Digite um valor: ")));
console.log(ask);
