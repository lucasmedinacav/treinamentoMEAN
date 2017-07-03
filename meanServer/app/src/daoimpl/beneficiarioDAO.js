let mongoose = require('mongoose');
let beneficiarioSchema = require('../schema/beneficiarioSchema');
let beneficiarioModel = mongoose.model("beneficiario", beneficiarioSchema);


function BeneficiarioDAO(){
    this.inserirBeneficiario = inserirBeneficiario;
    this.buscarBeneficiario = buscarBeneficiario;
}

function inserirBeneficiario(nome, idMoipl){
    beneficiarioModel.create({nome : nome, idMoipl : idMoipl},function(erro, succsess){
        if(erro){
            throw erro;
        }
        console.log(succsess);
    });
}

function buscarBeneficiario(){
    beneficiarioModel.find(function(erro, succsess){
        if(erro){
            throw erro;
        }
        console.log(succsess);
    });
}

module.exports = new BeneficiarioDAO();