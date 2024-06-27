const prompt = require("prompt-sync")();
let nota = Number(prompt("Digite sua nota: "));
switch (nota) {
  case 0:
  case 1:
  case 2:
  case 3:
    console.log("Você foi reprovado.");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Você ficou de recuperação.");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("Você foi aprovado.");
}
