const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad Pro", preco: 4199, fragil: false },
    { nome: "Copo de Vidro", preco: 12.49, fragil: true },
    { nome: "Copo de Plastico", preco: 18.99, fragil: false },
  ];
  
  // recebe um conjunto de parametro e o resulte tem que ser verdadeiro ou false
  console.log(
    produtos.filter((p) => {
      return false;
    })
  );
  
  const caro = (produto) => produto.preco >= 500;
  const fragil = (produto) => produto.fragil == true;
  
  console.log(produtos.filter(caro).filter(fragil));