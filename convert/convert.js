function numToDec() {
  let num = document.getElementById("num_to_dec").value;
  let base = parseInt(
    document.querySelector("input[name=base_a]:checked").value
  );
  let dec = parseInt(num, base);

  document.getElementById("num_to_dec_result").value = dec;
}

function decToNum() {
  let dec = parseInt(document.getElementById("dec_to_num").value);
  let base = parseInt(
    document.querySelector("input[name=base_b]:checked").value
  );
  let num = dec.toString(base);

  document.getElementById("dec_to_num_result").value = num;
}

function placeholderA() {
  document.getElementById("num_to_dec").placeholder =
    document.querySelector("input[name=base_a]:checked").value <= 2
      ? document
          .getElementById("num_to_dec")
          .placeholder.replace(
            document.getElementById("num_to_dec").placeholder,
            "binário"
          )
      : document.querySelector("input[name=base_a]:checked").value <= 8
      ? document
          .getElementById("num_to_dec")
          .placeholder.replace(
            document.getElementById("num_to_dec").placeholder,
            "octal"
          )
      : document.querySelector("input[name=base_a]:checked").value <= 16
      ? document
          .getElementById("num_to_dec")
          .placeholder.replace(
            document.getElementById("num_to_dec").placeholder,
            "hexadecimal"
          )
      : document.getElementById("num_to_dec").placeholder;
}

function placeholderB() {
  document.getElementById("dec_to_num_result").placeholder =
    document.querySelector("input[name=base_b]:checked").value <= 2
      ? document
          .getElementById("dec_to_num_result")
          .placeholder.replace(
            document.getElementById("dec_to_num_result").placeholder,
            "binário"
          )
      : document.querySelector("input[name=base_b]:checked").value <= 8
      ? document
          .getElementById("dec_to_num_result")
          .placeholder.replace(
            document.getElementById("dec_to_num_result").placeholder,
            "octal"
          )
      : document.querySelector("input[name=base_b]:checked").value <= 16
      ? document
          .getElementById("dec_to_num_result")
          .placeholder.replace(
            document.getElementById("dec_to_num_result").placeholder,
            "hexadecimal"
          )
      : document.getElementById("dec_to_num_result").placeholder;
}
