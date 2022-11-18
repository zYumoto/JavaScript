const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

//Parametros default
function log(texto = "Node") {
  console.log(texto);
}
log();
log("Sou mas forte");

// operador Rest
function total(...numero) {
  let total = 0;
  numero.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5));