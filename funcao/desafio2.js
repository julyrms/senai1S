//Faça uma aplicação que realize as 4 operações básicas de uma calculadora: **adição**, **subtração**, **multiplicação** e
//**divisão**.

//Cada operação básica deve ser uma função declarada que receba como parâmetro dois números do qual irá realizar a operação e retornar o resultado.

//**A aplicação deve:**

//1. receber 2 números do usuário através do prompt
//2. perguntar ao usuário qual operação realizar
//3. exibir o resultado
//4. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo

const prompt = require("prompt-sync")();

function soma(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mult(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

while (true) {
  const y = Number(prompt("Digite um número: "));
  const x = Number(prompt("Digite outro valor: "));
  const op = prompt("Qual operação deseja realizar? (soma/sub/mult/div): ");

  let resultado;

  switch (op) {
    case "soma":
      resultado = soma(x, y);
      break;
    case "sub":
      resultado = sub(x, y);
      break;
    case "mult":
      resultado = mult(x, y);
      break;
    case "div":
      resultado = div(x, y);
  }
  console.log(resultado);

  const ask = prompt(
    "Deseja realizar mais alguma operação? (S/N): "
  ).toLowerCase();

  if (ask != "s") {
    break;
  }
}
