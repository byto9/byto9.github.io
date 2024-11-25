function numToDec() {
  let num = document.getElementById("num_to_dec");
  let base = parseInt(
    document.querySelector("input[name=base_a]:checked").value
  );
  let custom = parseInt(document.getElementById("custom1").value);
  let result = document.getElementById("num_to_dec_result");

  result.value =
    base == 100 ? parseInt(num.value, custom) : parseInt(num.value, base);
}

function decToNum() {
  let dec = parseInt(document.getElementById("dec_to_num").value);
  let base = parseInt(
    document.querySelector("input[name=base_b]:checked").value
  );
  let custom = parseInt(document.getElementById("custom2").value);
  let result = document.getElementById("dec_to_num_result");

  result.value = base == 100 ? dec.toString(custom) : dec.toString(base);
}
