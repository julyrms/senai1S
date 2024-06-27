//Crie uma array vazia.
//Utilizando o loop for, crie um loop 5 iterações que faça as seguintes ações:
//- Receba do usuário um nome.
//- Crie um objeto com uma propriedade id que será incremental (começa com 1 e vai aumentando),
//e uma propriedade nome que deverá receber o nome digitado pelo usuário. Adicione esse objeto no final da array.
//Ao final do loop, exiba a array no console.
const prompt = require("prompt-sync")();

const arr = [];

for (let i = 0; i < 5; i++) {
  let ask = prompt("Digite um nome: ");
  let obj = {
    id: i + 1,
    nome: ask,
  };
  arr.push(obj);
  console.log(arr);
}
