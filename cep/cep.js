function consultaCep() {
  let cep = document.getElementById("cep").value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url)
    .then((response) => response.json())
    .then((consulta) => {
      console.log(consulta);
      document.getElementById("logradouro").textContent = consulta.logradouro;
      document.getElementById("bairro").textContent = consulta.bairro;
      document.getElementById("complemento").textContent = consulta.complemento;
      document.getElementById("localidade").textContent = consulta.localidade;
      document.getElementById("uf").textContent = consulta.uf;
      document.getElementById("titulo_cep").textContent = `CEP ${consulta.cep}`;

      $(".cepform").show();
      $(".barra").hide();
    });
}

$(function () {
  $(".cepform").hide();
});
