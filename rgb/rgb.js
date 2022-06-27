function colorPicker() {
  const rgb = {
    red: document.getElementById("red"),
    green: document.getElementById("green"),
    blue: document.getElementById("blue"),
    opacity: document.getElementById("opacity"),
  };

  const colorValue = {
    red: document.getElementById("red-value"),
    green: document.getElementById("green-value"),
    blue: document.getElementById("blue-value"),
    opacity: document.getElementById("opacity-value"),
  };

  rgb.red.addEventListener("input", () => {
    colorValue.red.innerHTML = `${rgb.red.value.padStart(2, "0")}`;
  });

  rgb.green.addEventListener("input", () => {
    colorValue.green.innerHTML = `${rgb.green.value.padStart(2, "0")}`;
  });

  rgb.blue.addEventListener("input", () => {
    colorValue.blue.innerHTML = `${rgb.blue.value.padStart(2, "0")}`;
  });

  rgb.opacity.addEventListener("input", () => {
    colorValue.opacity.innerHTML = (rgb.opacity.value / 255).toFixed(2);
  });

  const color = `rgba(${rgb.red.value}, ${rgb.green.value}, ${
    rgb.blue.value
  }, ${(rgb.opacity.value / 255).toFixed(2)})`;

  const hex = {
    red: parseInt(rgb.red.value).toString(16).padStart(2, "0"),
    green: parseInt(rgb.green.value).toString(16).padStart(2, "0"),
    blue: parseInt(rgb.blue.value).toString(16).padStart(2, "0"),
    opacity: parseInt(rgb.opacity.value).toString(16).padStart(2, "0"),
  };

  document.body.style.backgroundImage = `linear-gradient(${color}, transparent)`;
  document.getElementById("color").style.backgroundColor = color;
  document.getElementById("rgbvalue").textContent = `${color}`;
  document.getElementById(
    "hexvalue"
  ).textContent = `#${hex.red}${hex.green}${hex.blue}${hex.opacity}`;
}

const sliders = document.getElementsByClassName("slider");

for (const slider of sliders) {
  slider.addEventListener("input", colorPicker);
}
