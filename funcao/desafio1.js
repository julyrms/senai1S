//Neste desafio, o objetivo é implementar as funções que irão manipular a lista de tarefas.
//A array deve ser uma lista de objetos. Cada objeto deve representar uma tarefa com as seguintes propriedades:
//id, tarefa e marcada.
//São 4 funções, cada uma com sua devida responsabilidade. Implemente cada função para que a aplicação funcione corretamente.

const prompt = require("prompt-sync")();

/*
  Exemplo do Objeto da Tarefa
  {
    id: number,
    tarefa: string,
    marcada: boolean
  }
*/

const lista = [];

console.clear();

function mostrarLista() {
  console.log(lista);
}

function adicionarTarefa() {
  // escreva seu código aqui
}

function marcarTarefa() {
  // escreva seu código aqui
}

function removerTarefa() {
  // escreva seu código aqui
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
