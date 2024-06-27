const prompt = require("prompt-sync")();
const user = "july@gmail";
const senha = 1234;
const user2 = prompt("Digite seu email: ");
const senha2 = prompt("Digite sua senha: ");

if (senha2 == senha && user2 == user) {
  console.log("Acesso liberado");
} else {
  console.log("Acesso negado, verifique sua senha e email!");
}
