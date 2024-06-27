//todas as expressões
for (let i = 1; i < 10000; i = i * 2) {
  console.log(i);
}

//inicializador opcional
let i = 0;
for (; i < 10; i++) {
  console.log(i);
}

//condicao opcional
for (let i = 0; ; i++) {
  if (i > 10) {
    break;
  }
}

//sem a expressão final
for (let i = 0; i < 10; ) {
  if (i < 5) {
    i++;
  } else {
    i += 2;
  }
}

//sem nada
