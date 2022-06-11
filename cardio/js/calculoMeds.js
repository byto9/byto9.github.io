function calculoDose(){
	var vazao = document.getElementById("vazao").value;
	var peso = document.getElementById("peso").value;
	var conc = document.getElementById("conc").value;

	var mcg = ((vazao*conc*1000)/(peso*60)).toFixed(2);

	document.getElementById("resultado").innerHTML = "<h5>Esta vazão corresponde a dose de " + mcg + " mcg/kg/min</h5>";
}

function calculoVazao(){
	var dose = document.getElementById("dose").value;
	var peso = document.getElementById("peso2").value;
	var conc = document.getElementById("conc2").value;

	var mlh = ((dose*60*peso)/(conc*1000)).toFixed(2);

	document.getElementById("resultado").innerHTML = "<h5>Esta dose corresponde a vazão de " + mlh + " ml/h</h5>";
}