'use restrict';
let mongoose = require('mongoose');
let pagamentoSchema = require('../schema/pagamentoSchema')
let model = mongoose.model("pagamento", pagamentoSchema);

function Pagamento(){
    this.inserirPagamentoPedido = inserirPagamentoPedido;
    this.buscarPagamento = buscarPagamento;
}


function inserirPagamento(dataComHora, statusPagamento, tipoPag, vlr, beneficiariosPagamento, quantidade){
    return new Promisse(function(resolve,reject){
        model.create({dataHora : dataComHora, status : statusPagamento, tipoPagamento: tppag, valor : vlr, beneficiarios : beneficiariosPagamento, pedido: pedido}, function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(success);
        });
    })
}

function buscarPagamento(){
    return new Promisse(function(resolve, reject){
        model.find(function(erro, success){
            if(erro){
                throw erro;
            }
            resolve(success)
        });
    })
}

module.exports = new Pagamento();