const prompt = require("prompt-sync")();
const idade = Number(prompt("Digite sua idade: "));
if (idade >= 18) {
  console.log("Vai procurar um emprego!");
} else {
  console.log("Continua estudando irmão...");
}

let amigo = prompt("Você é gay?");
if (amigo == "sim") {
  console.log("cuidado! a sandra vai cagar na sua boca");
} else {
  console.log("a sandra não vai cagar na sua boca, mas fica longe");
}

