const arr = [
  [4, 8, 9],
  [9, 1, 3],
];
let linha1 = 1;
let linha2 = 1;

for (let linha = 0; linha < arr.length; linha++) {
  for (let coluna = 0; coluna < arr[linha].length; coluna++) {
    if (linha == 0) {
      linha1 = linha1 * arr[linha][coluna];
    }
    if (linha == 1) {
      linha2 = linha2 * arr[linha][coluna];
    }
  }
}
console.log("A multiplicação dos termos da primeira linha é: ", linha1);
console.log("A multiplicação dos termos da segunda linha é: ", linha2);
