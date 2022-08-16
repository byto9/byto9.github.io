const btn = document.querySelector(".random");

const refresh = () => {
  const rgb = {
    red: document.getElementById("red"),
    green: document.getElementById("green"),
    blue: document.getElementById("blue"),
    opacity: document.getElementById("opacity"),
  };

  rgb.red.value = parseInt(Math.random() * 255);
  rgb.green.value = parseInt(Math.random() * 255);
  rgb.blue.value = parseInt(Math.random() * 255);
  rgb.opacity.value = parseInt(Math.random() * 255);

  const colorValue = {
    red: document.getElementById("red-value"),
    green: document.getElementById("green-value"),
    blue: document.getElementById("blue-value"),
    opacity: document.getElementById("opacity-value"),
  };

  colorValue.red.textContent = `${rgb.red.value.padStart(2, "0")}`;
  colorValue.green.textContent = `${rgb.green.value.padStart(2, "0")}`;
  colorValue.blue.textContent = `${rgb.blue.value.padStart(2, "0")}`;
  colorValue.opacity.textContent = (rgb.opacity.value / 255).toFixed(2);

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
};

btn.addEventListener("click", refresh);
