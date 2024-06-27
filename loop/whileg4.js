const prompt = require("prompt-sync")();
let side;
let i = 0;
let home = 1;

while (true) {
  i++;
  side = Math.ceil(Math.random() * 20);
  console.log(side);
  if (side == 1) {
    console.log("Volte uma casa");
    home--;
  } else if (side >= 2 && side <= 11) {
    console.log("Você não avança");
  } else if (side >= 12 && side <= 19) {
    console.log("Você avança uma casa");
    home++;
  }
  if (side == 20) {
    console.log("Avance 10 casas");
    home = home + 10;
  }
  if (home >= 10) {
    prompt.hide("Parabéns, você conseguiu com " + i + " iterações");
    break;
  }
}
