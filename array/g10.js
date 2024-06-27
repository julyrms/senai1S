const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let d1 = 0;
let d2 = 0;

for (linha = 0; linha < arr.length; linha++) {
  let coluna = linha;
  let coluna2 = arr.length - 1 - linha;

  d1 = d1 + arr[linha][coluna];
  d2 = d2 + arr[linha][coluna2];
}

let result = d1 - d2;
console.log("A diferença das diagonais é: ", result);
