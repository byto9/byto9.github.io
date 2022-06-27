function phNum() {
  let radioNum = document.querySelector(".base_a:checked");
  let numPH = document.getElementById("num_to_dec");

  numPH.placeholder =
    radioNum.value == 2
      ? numPH.placeholder.replace(numPH.placeholder, "binário")
      : radioNum.value == 8
      ? numPH.placeholder.replace(numPH.placeholder, "octal")
      : radioNum.value == 16
      ? numPH.placeholder.replace(numPH.placeholder, "hexadecimal")
      : radioNum.value == 100
      ? numPH.placeholder.replace(numPH.placeholder, "base aleatória")
      : numPH.placeholder;
}

function phDec() {
  let radioDec = document.querySelector(".base_b:checked");
  let decPH = document.getElementById("dec_to_num_result");

  decPH.placeholder =
    radioDec.value == 2
      ? decPH.placeholder.replace(decPH.placeholder, "binário")
      : radioDec.value == 8
      ? decPH.placeholder.replace(decPH.placeholder, "octal")
      : radioDec.value == 16
      ? decPH.placeholder.replace(decPH.placeholder, "hexadecimal")
      : radioDec.value == 100
      ? decPH.placeholder.replace(decPH.placeholder, "base aleatória")
      : decPH.placeholder;
}
