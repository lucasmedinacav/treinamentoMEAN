var moip = require("node-moip");
	
	var payment = {
	  token: "XUI4H3ANBMD7M7T8BXTW7SBNOYZB6E0M",
	  appkey: "NEDTGNWYOT02LKDTWBDVQS7KECOBOCIO89DTCSYH",
	  mode: "identification",
	  environment: "test",
	  data: {
		  InstrucaoUnica : {
            // Comissoes: {
            // Comissionamento: [
            //                     {
            //                         Razao: "Motivo da comissão",
            //                         Comissionado: { LoginMoIP: "ze.silva1" },
            //                         ValorFixo: "30"
            //                     },
            //                     {
            //                         Razao: "Motivo da comissão",
            //                         Comissionado: { LoginMoIP: "leow_g.1" },
            //                         ValorFixo: "70"
            //                     }
            //                 ]
            //             },
	      Razao: "Razão / Motivo do pagamento",
		  Valores: {
		            Valor: {
		                    _attr : { moeda : "BRL" },
		                    _value : "100.00"
		                    }
	                },
	      FormasPagamento: {
	          FormaPagamento: ["BoletoBancario"], 
	      },
	      Pagador:{
	        Nome: "Carol da Silva",
	        Email: "ze.silva@email.com",
	        //IdPagador: "ze.silva1",
            //fullname: "Jose Santos",
            //birthdate: "1980-01-02",
	        EnderecoCobranca:{
	        	Numero: "171",
	        	TelefoneFixo: "(11)3165-4020",
	        	CEP: "01452-000",
	        	Pais: "BRA",
	        	Estado: "SP",
	        	Bairro: "Itain Bibi",
	        	Cidade: "São Paulo",
	        	Logradouro: "Av. Brigadeiro Faria Lima"
	        }
	      },
	    //URLNotificacao: "http://www.seuSite/transactions/notification",
        //URLRetorno: "http://www.seuSite/transactions",
		  }
		}
	};




function MoipService(){
    this.obterOrdemPagamento = obterOrdemPagamento;
}

function obterOrdemPagamento(){
   return new Promise(function(resolve, reject){
       var Moip = new moip.Moip(); 
        Moip.send(payment, function(response){ 
        resolve(JSON.stringify(response));
        })  
   });   
}
	 

module.exports = new MoipService();