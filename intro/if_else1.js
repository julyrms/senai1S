const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite sua idade: "));
if (idade >= 18) {
  console.log("É apto á dirigir");
} else {
  console.log("Sua idade ainda não permite que dirija");
}

const user = "july@email";
const senha = 1234;
const user2 = prompt("Digite seu email: ");
const senha2 = prompt("Digite sua senha: ");
if (user2 == user) {
  console.log("Email correto, digite sua senha");
} else {
  console.log("Email incorreto");
}
if (senha2 == senha) {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado");
}
