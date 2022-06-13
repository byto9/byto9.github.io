//calculadora de IMC

function calculoIMC(){
	let i = document.getElementById("idade").value;
	let a = document.getElementById("altura").value;
	let p = document.getElementById("peso").value;

	let imc = (p/(a**2)).toFixed(2);
	document.getElementById("resultado1").innerHTML = "Seu IMC é " + imc + " kg/m<sup>2</sup>";

	if (i >= 65){
		if (imc > 0){
			if (imc < 23){
				document.getElementById("resultado2").innerHTML = "Baixo peso";}
			else if (imc >= 23 && imc <= 30){
				document.getElementById("resultado2").innerHTML = "Peso normal";}
			else if (imc > 30){
				document.getElementById("resultado2").innerHTML = "Acima do peso";}}
		else{
			document.getElementById("resultado2").innerHTML = "Please enter valid details";}
	}
	if (i >= 18 && i <= 64){
		if (imc > 0){
			if (imc < 18.4){
				document.getElementById("resultado2").innerHTML = "Baixo peso";}
			else if (imc >= 18.5 && imc <= 24.9){
				document.getElementById("resultado2").innerHTML = "Peso normal";}
			else if (imc >= 25 && imc <= 29.9){
				document.getElementById("resultado2").innerHTML = "Sobrepeso";}
			else if (imc >= 30 && imc <= 34.9){
				document.getElementById("resultado2").innerHTML = "Obesidade grau I";}
			else if (imc >= 35 && imc <= 39.9){
				document.getElementById("resultado2").innerHTML = "Obesidade grau II";}
			else if (imc >= 40){
				document.getElementById("resultado2").innerHTML = "Obesidade grau III";}}
		else{
			document.getElementById("resultado2").innerHTML = "Dados inválidos!";}
	}

	if (i < 20){
		document.getElementById("resultado3").innerHTML = "Você deve ter 20 anos ou mais para usar esta calculadora.<br>Utilize uma calculadora de IMC pediátrico.";
	}
	$("#tabela_imc").show();
}

$(function(){
	$("#tabela_imc").hide();
})