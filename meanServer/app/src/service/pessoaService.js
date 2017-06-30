var pessoaDao = require('../daoimpl/cadastroPessoa_DAO');

function PessoaService() {
  this.cadastraPessoa = inserirPessoa;
}

function inserirPessoa(nomeUser, sobrenomeUser, senhaUser, emailUser, statusUser) {
  return pessoaDao.inserirPessoa(nomeUser, sobrenomeUser, senhaUser, emailUser, statusUser).then(response => {
    resolve(response);
  }).catch(function () {
    console.log('erro no cadastro de pessoa');
  });
}




module.exports = new PessoaService();