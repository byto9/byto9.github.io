const result = document.getElementById("result");
const ends_with_num = (num) => {
  return /\d$/.test(num);
};
const _id = (id) => {
  return document.querySelector(id);
};
/* ------------------------------- Functions ------------------------------- */
function add_to_end(x) {
  result.value += x;
}
function constant(x) {
  if (ends_with_num(result.value) == true) {
    result.value = x;
  } else {
    result.value += x;
  }
}
function add_symbol(x) {
  if (ends_with_num(result.value) == true) {
    result.value += x;
  } else {
    result.value += "";
  }
}
/* ------------------------------- Numbers/Constants ------------------------------- */
const numbers = [
  _id("#zero"),
  _id("#one"),
  _id("#two"),
  _id("#three"),
  _id("#four"),
  _id("#five"),
  _id("#six"),
  _id("#seven"),
  _id("#eight"),
  _id("#nine"),
];
numbers.forEach((n) => {
  n.addEventListener("click", () => {
    add_to_end(n.innerHTML);
  });
});
const constants = [_id("#euler"), _id("#pi")];
const const_values = [
  (constants[0].value = Math.E),
  (constants[1].value = Math.PI),
];
constants.forEach((c) => {
  c.addEventListener("click", () => {
    constant(c.value);
  });
});
/* ------------------------------- Operations ------------------------------- */
const operators = [
  _id("#plus"),
  _id("#minus"),
  _id("#multiply"),
  _id("#divide"),
  _id("#exponent"),
  _id("#mod"),
  _id("#dot"),
];
const symbols = [
  (operators[0].value = "+"),
  (operators[1].value = "-"),
  (operators[2].value = "*"),
  (operators[3].value = "/"),
  (operators[4].value = "**"),
  (operators[5].value = "%"),
  (operators[6].value = "."),
];
operators.forEach((o) => {
  o.addEventListener("click", () => {
    add_symbol(o.value);
  });
});
/* ------------------------------- Other operations ------------------------------- */
const sqrt = _id("#sqrt");
sqrt.addEventListener("click", () => {
  result.value = Math.sqrt(result.value);
});
const negative = _id("#negative");
negative.addEventListener("click", () => {
  result.value = result.value * -1;
});
const inverse = _id("#inverse");
inverse.addEventListener("click", () => {
  result.value = 1 / result.value;
});
const equals = _id("#equals");
equals.addEventListener("click", () => {
  result.value = eval(result.value);
});
const factorial = _id("#factorial");
factorial.addEventListener("click", () => {
  function factorial(num) {
    if (num < 0) {
      return -1;
    } else if (num == 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  result.value = factorial(result.value);
});
/* ------------------------------- Actions ------------------------------- */
const clear = _id("#clear");
clear.addEventListener("click", () => {
  result.value = "";
});
const bcksp = _id("#bcksp");
bcksp.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});
const par = [_id("#par_open"), _id("#par_close")];
const par_values = [(par[0].value = "("), (par[1].value = ")")];
par.forEach((p) => {
  p.addEventListener("click", () => {
    add_to_end(p.value);
  });
});
