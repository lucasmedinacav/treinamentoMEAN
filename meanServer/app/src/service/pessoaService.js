var pessoaDao = require('../daoimpl/cadastroPessoa_DAO');

var mongoose = require('mongoose');
let uri = 'mongoosedb://localhost:27017/ecommerce';

mongoose.connect(uri);

function PessoaService(){}

function inserirPessoa(nomeUser, sobrenomeUser, senhaUser, emailUser, statusUser){
  return pessoaDao.inserirPessoa(nomeUser, sobrenomeUser, senhaUser, emailUser, statusUser).then(function (params){
    console.log('sucesso no cadastro de pessoa');
  }).catch(function(){
     console.log('erro no cadastro de pessoa');
  })
}

module.exports = PessoaService();