let mongoose = require('mongoose');
let beneficiarioSchema = require('../schema/beneficiarioSchema');
let beneficiarioModel = mongoose.model("pedido", beneficiarioSchema);


function BeneficiarioDAO(){
    this.inserirBeneficiario = inserirBeneficiario;
    this.buscarBeneficiario = buscarBeneficiario;
}

function inserirBeneficiario(nome, idMoipl){
    return new Promise(function(resolve, reject){
        beneficiarioModel.create({nome : nome, idMoipl : idMoipl},function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(success);
        });
    })
}

function buscarBeneficiario(){
    return new Promise(function(resolve,reject){
        beneficiarioModel.find(function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(success);
        }); 
    })
}

module.exports = new BeneficiarioDAO();