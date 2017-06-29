'use restrict';
let mongoose = require('mongoose');
let pagamentoSchema = require('../schema/pagamentoSchema')
let model = mongoose.model("pagamento", pagamentoSchema);

function Pagamento(){
    this.inserirPagamento = inserirPagamento;
    this.buscarPagamento = buscarPagamento;
}


function inserirPagamento(razaoPagamento ,statusPagamento, tipoPagamento, codigoTransacao, dataHora,
                             valorTotal, valorTaxa, valorliquido, usuario, beneficiarios, pedido){

    return new Promise(function(resolve,reject){
        model.create({  razaoPagamento: razaoPagamento,statusPagamento : statusPagamento, tipoPagamento : tipoPagamento, 
                        codigoTransacao : codigoTransacao, dataHora : dataHora, valorTotal : valorTotal, valorTaxa : 
                        valorTaxa, valorliquido : valorliquido,usuario : usuario, beneficiarios : beneficiarios, pedido: pedido}, 
                        function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(success);
        });
    })
}

function buscarPagamento(){
    return new Promise(function(resolve, reject){
        model.find(function(erro, success){
            if(erro){
                throw erro;
            }
            resolve(success)
        });
    })
}

module.exports = new Pagamento();