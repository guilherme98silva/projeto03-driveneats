//Variáveis dos produtos começam com valor nulo
let prato = null;
let pratoPreco = null;
let bebida = null;
let bebidaPreco = null;
let sobremesa = null;
let sobremesaPreco = null;

let contadorProdutos = 0;


//Função que aplica a borda de seleção nos produtos
function selecionarPrato(div, descricao, preco) { 
  desmarcarProduto('prato');

  div.classList.add("selecionado");
  prato  = descricao;
  pratoPreco = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarFechamento();
}

function selecionarBebida(div, descricao, preco) {
  desmarcarProduto('bebida');
  
  div.classList.add("selecionado");
  bebida = descricao;
  bebidaPreco = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarFechamento();
}

function selecionarSobremesa(div, descricao, preco) {
  desmarcarProduto('sobremesa');

  div.classList.add("selecionado");
  sobremesa = descricao;
  sobremesaPreco = preco;
  contadorProdutos = contadorProdutos + 1;

  liberarFechamento();
}


//Função que remove a marca caso outro produto seja selecionado
function desmarcarProduto(produto) {
  const produtoSelecionado = document.querySelector(`.${produto} .selecionado`); 
  if(produtoSelecionado !== null) {
    produtoSelecionado.classList.remove("selecionado");
    contadorProdutos = contadorProdutos - 1;
  }
}


//Função que libera o botão de fechamento do pedido
function liberarFechamento() {
  const botao = document.querySelector("footer button");
  if(contadorProdutos === 3) {
    botao.disabled = false;
    botao.innerHTML = "Fechar pedido";
    botao.classList.add("liberado");
  } else {
    botao.disabled = true;
    botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    botao.classList.remove("liberado");
  }
}


/* Tela de revisão de pedido */
function revisarPedido() {
  document.querySelector(".confirmacao").classList.remove("escondido");

  document.querySelector(".pratoEscolhido").innerHTML = prato;
  document.querySelector(".pratoEscolhidoPreco").innerHTML = `R$ ${pratoPreco.toFixed(2)}`;
  document.querySelector(".bebidaEscolhida").innerHTML = bebida;
  document.querySelector(".bebidaEscolhidaPreco").innerHTML = `R$ ${bebidaPreco.toFixed(2)}`;
  document.querySelector(".sobremesaEscolhida").innerHTML = sobremesa;
  document.querySelector(".sobremesaEscolhidaPreco").innerHTML = `R$ ${sobremesaPreco.toFixed(2)}`

  document.querySelector(".totalPreco").innerHTML = `R$ ${(pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2)}`
}


/* Mensagem customizada para o Whats */
function montaMensagemWhatsApp() {
  const numero = "5517981149132";
  const total = (pratoPreco + bebidaPreco + sobremesaPreco).toFixed(2);

  let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${total}
  `;

  mensagem = encodeURIComponent(mensagem);
  return `https://wa.me/${numero}?text=${mensagem}`;
}


/* Abrirá uma nova página com a mensagem já pronta para o Whats */
function fecharPedido() {
  window.open(montaMensagemWhatsApp(), '_blank').focus();
}
   

/*Caso o usuário clique em cancelar, voltará para a tela anterior */
function refazerPedido() {
  document.querySelector(".confirmacao").classList.add("escondido");
}


