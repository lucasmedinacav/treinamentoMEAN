let mongoose = require('mongoose');
let beneficiarioSchema = require('../schema/beneficiarioSchema');
let beneficiarioModel = mongoose.model("beneficiario", beneficiarioSchema);


function BeneficiarioDAO(){
    this.inserirBeneficiario = inserirBeneficiario;
    this.buscarBeneficiario = buscarBeneficiario;
}

function inserirBeneficiario(nome, idMoip){
    return new Promise(function(resolve, reject){
        beneficiarioModel.create({nome : nome, idProprioMoip : idMoip}, function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(succsess);
        });
    })
}

function buscarBeneficiario(){
     return new Promise(function(resolve, reject){
        beneficiarioModel.find(function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(succsess);
        });
    });
}

module.exports = new BeneficiarioDAO();