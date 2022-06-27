function consultaCep() {
  let cep = document.getElementById("cep").value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    success: function (response) {
      console.log(response);
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#complemento").html(response.complemento);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      $("#titulo_cep").html("CEP " + response.cep);
      $(".cepform").show();
      $(".barra").hide();
    },
  });
}

$(function () {
  $(".cepform").hide();
});
