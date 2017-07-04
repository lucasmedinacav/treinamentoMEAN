var moip = require("node-moip");
	
	

function obterInformacoesPagamento(nomeComprador, emailComprador, formaPagamento, valorPagamento){
 

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
            //                         Comissionado: { LoginMoIP: "i-abreu@hotmail.com" },
            //                         ValorFixo: "30"
            //                     }
            //                 ]
            //             },
	      Razao: "Compra de Servicos/Produtos Avanade Accenture",
		  Valores: {
		            Valor: {
		                    _attr : { moeda : "BRL" },
		                    _value : valorPagamento
		                    }
	                },
	      FormasPagamento: {
	          FormaPagamento: [formaPagamento], 
	      },
	      Pagador:{
	        Nome: nomeComprador,
	        Email: emailComprador,
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

	return payment;
}



function MoipService(){
    this.obterOrdemPagamento = obterOrdemPagamento;
}

function obterOrdemPagamento(nomeComprador, emailComprador, formaPagamento, valorPagamento){
   return new Promise(function(resolve, reject){
	   var informacoesPagamento = obterInformacoesPagamento(nomeComprador, emailComprador, formaPagamento, valorPagamento); 
	   
        var Moip = new moip.Moip(); 
        Moip.send(informacoesPagamento, function(response){ 
		console.log(JSON.stringify(response));
        resolve(JSON.stringify(response));
        })  
   });   
}
	 

module.exports = new MoipService();