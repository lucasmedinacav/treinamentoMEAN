'use restrict';
let mongoose = require('mongoose');
let carroSchema = require('../schema/carroSchema')
let model = mongoose.model("carro", carroSchema);

function CarroDAO(){
    this.inserirCarro = inserirCarro;
}


function inserirCarro(produtos, marcaCar, modeloCar, anoCar, valorCar){
    model.create({produtos : produtos,marca : marcaCar, modelo : modeloCar, ano: anoCar, valor : valorCar})
}

module.exports = new CarroDAO();