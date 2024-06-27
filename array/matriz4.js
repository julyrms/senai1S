const arr = [
  [1, 2, 3],
  [4, 5, 6],
];
let soma = 0;
for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr[linha].length; coluna++) {
    soma = soma + arr[linha][coluna];
  }
}

console.log("A soma total é: ", soma);
