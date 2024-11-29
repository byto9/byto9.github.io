// constant for queryselector
const _id = (id) => {
  return document.querySelector(id);
};

// color sliders
const rgb = [_id("#red"), _id("#green"), _id("#blue"), _id("#alpha")];

// color rgb values (numbers)
const color_value = [
  _id("#red-value"),
  _id("#green-value"),
  _id("#blue-value"),
  _id("#alpha-value"),
];

// This function will handle the changes in the panel under the sliders that shows the RGBA and hex values of the color.
// It also changes the background color -----------------------------------------------------------------------
function colorPanel() {
  // rgba value
  const color = `rgba(${rgb[0].value}, ${rgb[1].value}, ${rgb[2].value}, ${(
    rgb[3].value / 255
  ).toFixed(2)})`;

  // hex value
  const hex = [
    parseInt(rgb[0].value).toString(16).padStart(2, "0"),
    parseInt(rgb[1].value).toString(16).padStart(2, "0"),
    parseInt(rgb[2].value).toString(16).padStart(2, "0"),
    parseInt(rgb[3].value).toString(16).padStart(2, "0"),
  ];

  // background color
  document.body.style.backgroundImage = `linear-gradient(${color}, transparent)`;
  _id("#color").style.backgroundColor = color;
  _id("#rgbvalue").textContent = `${color}`;
  _id("#hexvalue").textContent = `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}`;
}

// Random color button ---------------------------------------------------------------------------------------
const btnRandom = _id("#random");
const sliders = document.getElementsByClassName("slider");
for (const slider of sliders) {
  // number changes when moving the sliders
  slider.addEventListener("input", () => {
    rgb[0].addEventListener("input", () => {
      rgb[0].value = rgb[0].value;
      color_value[0].innerHTML = `${rgb[0].value.padStart(3, "0")}`;
    });
    rgb[1].addEventListener("input", () => {
      color_value[1].innerHTML = `${rgb[1].value.padStart(3, "0")}`;
    });
    rgb[2].addEventListener("input", () => {
      color_value[2].innerHTML = `${rgb[2].value.padStart(3, "0")}`;
    });
    rgb[3].addEventListener("input", () => {
      color_value[3].innerHTML = (rgb[3].value / 255).toFixed(2);
    });

    colorPanel();
  });
}

// Refresh values --------------------------------------------------------------------------------------------
const refresh = () => {
  rgb.forEach((c) => {
    c.value = parseInt(Math.random() * 255);
  });
  color_value[0].textContent = `${rgb[0].value.padStart(3, "0")}`;
  color_value[1].textContent = `${rgb[1].value.padStart(3, "0")}`;
  color_value[2].textContent = `${rgb[2].value.padStart(3, "0")}`;
  color_value[3].textContent = (rgb[3].value / 255).toFixed(2);

  colorPanel();
};

// Invert colors --------------------------------------------------------------------------------------------
const btnInvert = _id("#invert");
const invert = () => {
  rgb[0].value = Math.abs(rgb[0].value - 255);
  color_value[0].innerHTML = `${rgb[0].value.padStart(3, "0")}`;
  rgb[1].value = Math.abs(rgb[1].value - 255);
  color_value[1].innerHTML = `${rgb[1].value.padStart(3, "0")}`;
  rgb[2].value = Math.abs(rgb[2].value - 255);
  color_value[2].innerHTML = `${rgb[2].value.padStart(3, "0")}`;

  colorPanel();
};

window.onload = refresh;
btnRandom.addEventListener("click", refresh);
btnInvert.addEventListener("click", invert);
