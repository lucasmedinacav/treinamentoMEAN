
let redisClient = require('redis-connection')();
redisClient.set('CampanhaCRM', 'SuperBonus');

function inserirProdutoCache(nomeProd, desc, valor, quantidade, caminho){
    redisClient.set(nomeProd ,{nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho})
}
function ProdutoRedisDAO(){
    this.inserirProdutoCache = inserirProdutoCache;
}

module.exports = new ProdutoRedisDAO();