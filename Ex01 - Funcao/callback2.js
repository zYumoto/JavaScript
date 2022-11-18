const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas = [];

for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas);

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(`com callback ${notasBaixas2}`);

const notaMenorQue7 = (nota) => nota < 7;
const notasBaixas3 = notas.filter(notaMenorQue7);
console.log(`com callback ${notasBaixas3} com arrow`);
console.log(notasBaixas3);