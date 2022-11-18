const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Caneta", "preco": 4.00}',
    '{"nome": "Lapis", "preco": 1.45}',
  ];
  
  // Retorna um array apenas com os preços
  // Primeiro transforma as string em json
  
  // transformando
  const paraObjeto = (json) => JSON.parse(json);
  const apenasPreco = (produto) => produto.preco;
  
  const resultado = carrinho.map(paraObjeto).map(apenasPreco);
  console.log(resultado);