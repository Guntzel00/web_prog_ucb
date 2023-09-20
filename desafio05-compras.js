const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Item(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

function criarCarrinho() {
  const carrinho = [];
  
  function adicionarItem(item) {
    carrinho.push(item);
  }

  function calcularTotal(comDesconto, callback) {
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    if (comDesconto) {
      // Aplica um desconto de 10% se comDesconto for verdadeiro
      const valorComDesconto = total * 0.9;
      callback(valorComDesconto);
    } else {
      callback(total);
    }
  }

  return {
    adicionarItem,
    calcularTotal
  };
}

// Função para interagir com o usuário e coletar informações sobre os itens
function iniciarCompra() {
  const meuCarrinho = criarCarrinho();

  function adicionarMaisItens() {
    rl.question('Digite o nome do item: ', (nomeItem) => {
      rl.question('Digite o preço do item: ', (precoItem) => {
        const item = new Item(nomeItem, parseFloat(precoItem));
        meuCarrinho.adicionarItem(item);
        rl.question('Deseja adicionar mais itens? (s/n): ', (resposta) => {
          if (resposta.toLowerCase() === 's') {
            adicionarMaisItens();
          } else {
            rl.question('Deseja aplicar desconto? (s/n): ', (desconto) => {
              meuCarrinho.calcularTotal(desconto.toLowerCase() === 's', (valorTotal) => {
                console.log(`Valor total da compra: R$ ${valorTotal.toFixed(2)}`);
                rl.close();
              });
            });
          }
        });
      });
    });
  }

  adicionarMaisItens();
}

// Iniciar o processo de compra
iniciarCompra();