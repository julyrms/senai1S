const prompt = require("prompt-sync")();
const salario = Number(
  prompt("Digite seu salário, para saber quanto de imposto será pago: ")
);
let salario1 = salario * 0.075;
let salario2 = salario * 0.15;
let salario3 = salario * 0.225;
let salario4 = salario * 0.275;
if (salario <= 2112) {
  console.log("Você é isento de impostos!");
} else if (salario > 2112 && salario <= 2826.65) {
  console.log(salario1 + " Você pagará 7.5% de impostos!");
} else if (salario > 2826.65 && salario <= 3751.05) {
  console.log(salario2 + " Você pagará 15% de impostos!");
} else if (salario > 3751.05 && salario <= 4664.68) {
  console.log(salario3 + " Você pagará 22.5% de impostos!");
} else {
  console.log(salario4 + " Você pagará 27.5% de impostos!");
}
