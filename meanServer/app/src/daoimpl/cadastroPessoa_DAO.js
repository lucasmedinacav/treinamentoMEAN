'use restrict';
let  mongoose  =  require('mongoose');
let  pessoaSchema  =  require('../schema/cadastroPessoa_Schema')
let  pessoaModel  =  mongoose.model("pessoa",  pessoaSchema);

function  cadastroPessoa_DAO() {
        this.inserirPessoa  =  inserirPessoa;
        this.bucarPessoa  =  bucarPessoa;
}

function  inserirPessoa(nomeUser,  sobrenomeUser,  senhaUser, emailUser,  statusUser) {
        return  new  Promise(function (resolve,  reject) {
                pessoaModel.create({ nome :  nomeUser,  sobrenome :  sobrenomeUser,  senha:  senhaUser,  status :  statusUser },  function (erro,  succsess) {
                        if (erro) {
                                throw  erro;
                        }
                        resolve(succsess);
                })
        })
} 