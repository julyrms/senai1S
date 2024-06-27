const prompt = require("prompt-sync")();
const temperatura = Number(
  prompt("Quantos graus em celcius esta na sua cidade?")
);
const tempf = Number(temperatura * 1.8 + 32);
console.log("A temperatura em Fahrenheit é: " + tempf);
