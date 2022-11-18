const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Ana", nota: 8.7, bolsista: true },
  ];
  
  // Desafio 1; Todos alunos são bolsista?
  const todosBolsista = (resultado, bolsista) => resultado && bolsista;
  console.log(alunos.map((e) => e.bolsista).reduce(todosBolsista));
  
  // Desafio 2: Algum aluno é bolsista?
  const algumBolsista = (resultado, bolsista) => resultado || bolsista;
  console.log(alunos.map((e) => e.bolsista).reduce(algumBolsista));