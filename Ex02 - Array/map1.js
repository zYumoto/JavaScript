// Multiplicnando o valores do array
const nums = [1, 2, 3, 4, 5];

// Map é um for com proposito
let resultado = nums.map((e) => {
  return e * 2;
});
console.log(resultado);

//transformando o array
const soma10 = (e) => e * 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);