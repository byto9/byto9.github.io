const _id = (id) => {
  return document.querySelector(id);
};
const btn = _id("#btn");
const output = document.getElementById("output");
btn.addEventListener("click", (e) => {
  const cep = _id("#cep").value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  let cepData = fetch(url);
  cepData
    .then((resp) => resp.json())
    .then((d) => {
      console.log(d);
      _id("#logradouro").innerHTML = d.logradouro;
      _id("#bairro").innerHTML = d.bairro;
      _id("#complemento").innerHTML = d.complemento;
      _id("#localidade").innerHTML = d.localidade;
      _id("#uf").innerHTML = d.uf;
      _id("#titulo_cep").innerHTML = `CEP ${d.cep}`;
    });
  output.classList.remove("hide");
  output.classList.add("show");
  e.preventDefault();
});
const clear = _id("#clear");
clear.addEventListener("click", (e) => {
  output.classList.add("hide");
  output.classList.remove("show");
  _id("#cep").value = "";
});
