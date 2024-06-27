const prompt = require("prompt-sync")();

const nota1 = Number(prompt("Qual foi sua primeira nota?"));

const nota2 = Number(prompt("Qual foi sua segunda nota?"));

const nota3 = Number(prompt("Qual foi sua terceira nota?"));

const resultadonotas = (nota1 + nota2 + nota3) / 3;

console.log(resultadonotas);
