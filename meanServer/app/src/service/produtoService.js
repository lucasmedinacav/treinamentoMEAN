var produtoDAO = require('../daoimpl/produtoDAO');

function ProdutoService(){
  this.criarProduto = inserirProduto;
  this.consultarProduto = buscarProduto;
}


function inserirProduto(nomeProduto, descricaoProduto, valorProduto, quantidadeProduto, caminhoFoto){ 
   return new Promise(function(resolve, reject){ 

      produtoDAO.inserirProduto(nomeProduto, descricaoProduto, valorProduto, quantidadeProduto, caminhoFoto).then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
}

function buscarProduto(){ 
   return new Promise(function(resolve, reject){ 

      produtoDAO.bucarProduto().then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
}

module.exports = new ProdutoService();