//Crie um objeto chamado pessoa com as seguintes propriedades: nome, idade, profissão, e país. Cada propriedade precisa possui algum valor atribuído, seja criativo.
//Exiba no console o nome e a idade.
//Altere a profissão para “vendedor da shopee”.
//Adicione uma propriedade email e atribua um email.
//Delete a propriedade país.
//Exiba no console o objeto.

let pessoa = {
  nome: "july",
  idade: 6,
  profissão: "garota de programa",
  país: "brasil",
};

console.log("A pessoa é ", pessoa.nome, " e sua idade é ", pessoa.idade);

pessoa.profissão = "vendedora da shopee";
pessoa.email = "julytone@gmail.com";

console.log(pessoa);
