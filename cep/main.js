function consultaCep(){
	$(".barra").show();
	let cep = document.getElementById("cep").value;
	let url = "https://viacep.com.br/ws/" + cep + "/json/";
	console.log(url);
	$.ajax({
		url: url, 
		type: "GET",
		success: function(response){
			console.log(response);
			$("#logradouro").html(response.logradouro);
			$("#bairro").html(response.bairro);
			$("#complemento").html(response.complemento);
			$("#localidade").html(response.localidade);
			$("#uf").html(response.uf);
			$("#titulo_cep").html("CEP " + response.cep);
			$(".cepform").show();
			$(".barra").hide();
			/*
			também pode ser assim:
			document.getElementById("logradouro").innerHTML = response.logradouro;
			document.getElementById("bairro").innerHTML = response.bairro;
			document.getElementById("cep").innerHTML = response.cep;
			document.getElementById("localidade").innerHTML = response.localidade;
			document.getElementById("uf").innerHTML = response.uf;
			*/
			//console.log(response.bairro);
			//alert(response.logradouro);
		}
	})
}

$(function(){
	$(".cepform").hide();
	$(".barra").hide();
});