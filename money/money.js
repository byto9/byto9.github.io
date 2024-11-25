const _id = (id) => {
  return document.querySelector(id);
};
function convertCurrency() {
  let amount = _id("#amount").value;
  let currency1 = _id("#currency1").value;
  let currency2 = _id("#currency2").value;

  let myHeaders = new Headers();
  myHeaders.append("apikey", "CtPAsQSQ4nR6Yw5Ux52xF6mG0bgAn7hJ");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  let data = fetch(
    `https://api.apilayer.com/fixer/convert?to=${currency2}&from=${currency1}&amount=${amount}`,
    requestOptions
  );

  data
    .then((res) => res.json())
    .then((d) => {
      console.log(d);
      let result = d.result;
      _id(
        "#result"
      ).innerText = `${amount} ${currency1} = ${result} ${currency2}`;
    });
}
