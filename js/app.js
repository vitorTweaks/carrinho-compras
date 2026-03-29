// const selectProduto = document.getElementById('produto');

// function lerProdutos(selectElement) {
//     const valorSelecionado = selectElement.value;
//     const partes = valorSelecionado.split('- R$ ');
//     const nome = partes[0];
//     const preço = partes[1];

//     console.log('Nome', nome);
//     console.log('Preço', preço);
// }
// let valorTotal = 0;

// function adicionarAoCarrinho(nome, subtotal, quantidade) {
//     const novoElemento = document.createElement('p');
//     novoElemento.textContent = `${quantidade}x ${nome} - R$ ${subtotal.toFixed(2)}`;

//     const carrinho = document.getElementById('lista-produtos');
//     carrinho.appendChild(novoElemento);

//     valorTotal += subtotal;
//     document.getElementById('valor-total').textContent = 'R$' + valorTotal.toFixed(2);

// }

// function adicionar() {
//     //recuperar valores, nome do produto, quantidade e valor
//     //calcular o preço, o nosso subtotal 
//     //adicionar ao carrinho 
//     //atualizar o valor total
//     const valorSelecionado = selectProduto.value;
//     const partes = valorSelecionado.split('- R$');
//     const nome = partes[0];
//      const preço = parseFloat(partes[1]);
//      const quantidade = parseFloat(document.getElementById('quantidade').value);

//      const subtotal = preço * quantidade

//      adicionarAoCarrinho(nome, subtotal, quantidade);
//  }

//  function limparCarrinho() {
//      const carrinho = document.getElementById('lista-produtos');

//      carrinho.innerHTML = '';

//      valorTotal = 0;

//      document.getElementById('valor-total').textContent = 'R$0';
//  }
 
//  function limpar() {
//      limparCarrinho();
//  }

// document.getElementById('quantidade').value = 0;
// quantidade();

let totalGeral = 0; 
limpar();

function adicionar() {
    //recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o subtotal 
    let preço = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho 
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
</section>`;
// atualizar o valor total 
totalGeral = totalGeral + preço;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${ totalGeral}`;
document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0; 
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}