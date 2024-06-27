//Faça uma aplicação que converta um valor em **BRL** (Real Brasileiro) em outras moedas estrangeiras.

//Crie uma função que tenha como parâmetro o valor em **BRL** e o valor da moeda estrangeira selecionada
//pelo usuário, realizar o cálculo e retornar o resultado.

//**A aplicação deve:**

//1. receber um valor em **BRL** do usuário
//2. apresentar as opções de moedas para conversão e receber uma escolha do usuário
//3. baseado na escolha, realizar o cálculo da conversão
//4. exibir o resultado, o nome da moeda convertida e o valor de câmbio atual desta moeda.
//5. perguntar se o usuário deseja realizar mais alguma operação: caso queira, recomeçar o processo.

const cambioMoedas = {
  dolar_us: {
    nome: "Dólar Americano",
    codigo: "USD",
    valor_em_real: 5.4,
  },
  euro: {
    nome: "Euro",
    codigo: "EUR",
    valor_em_real: 6.52,
  },
  libra: {
    nome: "Libra Esterlina",
    codigo: "GBP",
    valor_em_real: 7.42,
  },
  iene: {
    nome: "Iene Japonês",
    codigo: "JPY",
    valor_em_real: 0.049,
  },
  dolar_au: {
    nome: "Dólar Australiano",
    codigo: "AUD",
    valor_em_real: 4.14,
  },
};
