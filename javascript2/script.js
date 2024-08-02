const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Bem-vindo à nossa Loja de Produtos!';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.id = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Produto Exemplo';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Este é um excelente produto para suas necessidades diárias.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150';
imagemProduto.alt = 'Imagem do Produto';

produto.appendChild(imagemProduto);
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

document.body.appendChild(produto);
