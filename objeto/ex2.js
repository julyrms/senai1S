//Criar um objeto chamado carro com propriedades de marca, modelo, ano e cor.
//Exiba o modelo e cor.
//Altere a cor para “jacinto.
//Adicione uma propriedade condicao e defina se é usado ou novo.
//Delete a propriedade ano.
//Exiba no console o objeto.
let carro = {
  marca: "honda",
  modelo: "civic",
  ano: 2017,
  cor: "preto",
};

console.log("O modelo do carro é ", carro.modelo, " e sua cor é ", carro.cor);
carro.cor = "jacinto";
console.log("A nova cor do carro é ", carro.cor);

carro.condicao = "usado";

delete carro.ano;

console.log(carro);
