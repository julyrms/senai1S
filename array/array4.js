const arr = ["placa-mãe", "cpu", "ram", "rom", "fonte"];
console.log("A lista original é: ", arr);
arr.splice(1, 1, "processador");
console.log("A nova lista é: ", arr);

arr.reverse();
console.log("A lista inversa é: ", arr);
