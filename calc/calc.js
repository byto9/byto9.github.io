function calc(tipo, valor) {
  const result = document.getElementById("result");

  if (tipo === "action") {
    if (valor === "c") {
      result.value = "";
    }

    if (valor === "x") {
      result.value = result.value.slice(0, -1);
    }

    if (valor === "neg") {
      result.value = result.value * -1;
    }

    if (valor === "(" || valor === ")") {
      result.value += valor;
    }

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "/" ||
      valor === "*" ||
      valor === "**" ||
      valor === "%" ||
      valor === "."
    ) {
      if (
        result.value.endsWith(0) ||
        result.value.endsWith(1) ||
        result.value.endsWith(2) ||
        result.value.endsWith(3) ||
        result.value.endsWith(4) ||
        result.value.endsWith(5) ||
        result.value.endsWith(6) ||
        result.value.endsWith(7) ||
        result.value.endsWith(8) ||
        result.value.endsWith(9) ||
        result.value.endsWith("(") ||
        result.value.endsWith(")")
      ) {
        result.value += valor;
      } else if (
        result.value.endsWith("+") ||
        result.value.endsWith("-") ||
        result.value.endsWith("/") ||
        result.value.endsWith("*") ||
        result.value.endsWith("**") ||
        result.value.endsWith("%") ||
        result.value.endsWith(".")
      ) {
        result.value += "";
      }
    }

    if (valor === "=") {
      let resultado = eval(result.value);
      result.value = resultado.toFixed(2);
    }
  }

  if (tipo === "num") {
    result.value += valor;
  }
}
