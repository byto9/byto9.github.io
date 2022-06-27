function calculoIMC() {
  const i = document.getElementById("idade").value;
  const a = document.getElementById("altura").value;
  const p = document.getElementById("peso").value;
  const result1 = document.getElementById("resultado1");
  const result2 = document.getElementById("resultado2");
  const result3 = document.getElementById("resultado3");

  const imc = (p / a ** 2).toFixed(2);
  result1.innerHTML = `Seu IMC é ${imc} kg/m<sup>2</sup>`;

  if (i >= 65) {
    if (imc > 0) {
      imc < 23
        ? (result2.innerHTML = "Baixo peso")
        : imc >= 23 && imc <= 30
        ? (result2.innerHTML = "Peso normal")
        : imc > 30
        ? (result2.innerHTML = "Sobrepeso")
        : (result2.innerHTML = "Dados inválidos!");
    } else {
      result2.innerHTML = "Dados inválidos!";
    }
  }
  if (i >= 18 && i <= 64) {
    if (imc > 0) {
      imc < 18.4
        ? (result2.innerHTML = "Baixo peso")
        : imc >= 18.5 && imc <= 24.9
        ? (result2.innerHTML = "Peso normal")
        : imc >= 25 && imc <= 29.9
        ? (result2.innerHTML = "Sobrepeso")
        : imc >= 30 && imc <= 34.9
        ? (result2.innerHTML = "Obesidade grau I")
        : imc >= 35 && imc <= 39.9
        ? (result2.innerHTML = "Obesidade grau II")
        : imc >= 40
        ? (result2.innerHTML = "Obesidade grau III")
        : (result2.innerHTML = "Dados inválidos!");
    } else {
      result2.innerHTML = "Dados inválidos!";
    }
  }

  if (i < 20) {
    result3.innerHTML =
      "Você deve ter 20 anos ou mais para usar esta calculadora.<br>Utilize uma calculadora de IMC pediátrico.";
  }
  $(".tabela_imc").show();
}

$(function () {
  $(".tabela_imc").hide();
});
