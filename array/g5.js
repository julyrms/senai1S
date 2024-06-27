//Exiba no console a multiplicação dos elementos que estão na mesma **coluna**.
//Para isso, utilize um `for` que irá percorrer as colunas e um `for` que irá percorrer as linhas. Com base nisso, será possível
//fazer o cálculos com os elementos de uma coluna específica e mostrar em tela o resultado da multiplicação.
const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

let result = 1;

for (let coluna = 0; coluna < numbers[0].length; coluna++) {
  for (let linha = 0; linha < numbers.length; linha++) {
    result = result * numbers[linha][coluna];
  }
  console.log("A multiplicação por coluna é, ", result);
}
