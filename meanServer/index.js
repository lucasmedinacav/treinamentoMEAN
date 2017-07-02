var express = require('express'); //Importando o modulo do express
var app = express(); //Obtem o 'objeto' express que sera usado para configurar a aplicacao
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

app.use(express.static('../client'));
app.use(bodyParser.json());   

let uri = 'mongodb://localhost:27017/mock2';
mongoose.connect(uri);


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var loginRota = require('./routes/loginroutes/login');
var produtoRota = require('./routes/produtosroutes/produto');
var moipRota = require('./routes/moiproutes/moip');

app.use("/login", loginRota);
app.use("/produto", produtoRota);
app.use("/moip", moipRota); 

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');




    console.log(this.campoNome);
    console.log(this.descricao);
    console.log(this.valor);
    console.log(this.quantidade);
app.post('/upload', function (req, res) {
    console.log("req.file"); 
    upload(req, res, function (err) {
        console.log(req.file);
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            throw err;
        }
        res.json({ error_code: 0, err_desc: null });
    });
});

app.listen(3002, function () {
    console.log('Servidor inicializado');
});




