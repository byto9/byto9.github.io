function colorPicker() {
  let rgb = {
    red: document.getElementById("red"),
    green: document.getElementById("green"),
    blue: document.getElementById("blue"),
    opacity: document.getElementById("opacity"),
  };

  let colorValue = {
    red: document.getElementById("red-value"),
    green: document.getElementById("green-value"),
    blue: document.getElementById("blue-value"),
    opacity: document.getElementById("opacity-value"),
  };

  rgb.red.addEventListener("input", () => {
    colorValue.red.innerHTML =
      rgb.red.value < 9 ? `0${rgb.red.value}` : rgb.red.value;
  });

  rgb.green.addEventListener("input", () => {
    colorValue.green.innerHTML =
      rgb.green.value < 9 ? `0${rgb.green.value}` : rgb.green.value;
  });

  rgb.blue.addEventListener("input", () => {
    colorValue.blue.innerHTML =
      rgb.blue.value < 9 ? `0${rgb.blue.value}` : rgb.blue.value;
  });

  rgb.opacity.addEventListener("input", () => {
    colorValue.opacity.innerHTML = (rgb.opacity.value / 255).toFixed(2);
  });

  let color = `rgba(${rgb.red.value}, ${rgb.green.value}, ${rgb.blue.value}, ${(
    rgb.opacity.value / 255
  ).toFixed(2)})`;

  let hex = {
    red: parseInt(rgb.red.value).toString(16).padStart(2, "0"),
    green: parseInt(rgb.green.value).toString(16).padStart(2, "0"),
    blue: parseInt(rgb.blue.value).toString(16).padStart(2, "0"),
    opacity: parseInt(rgb.opacity.value).toString(16).padStart(2, "0"),
  };

  document.body.style.backgroundImage = `linear-gradient(${color}, transparent)`;
  document.getElementById("color").style.backgroundColor = color;
  document.getElementById("rgbvalue").textContent = `RGB: ${color}`;
  document.getElementById(
    "hexvalue"
  ).textContent = `Hex: #${hex.red}${hex.green}${hex.blue}${hex.opacity}`;
}

document.getElementById("red").addEventListener("input", colorPicker);
document.getElementById("green").addEventListener("input", colorPicker);
document.getElementById("blue").addEventListener("input", colorPicker);
document.getElementById("opacity").addEventListener("input", colorPicker);
