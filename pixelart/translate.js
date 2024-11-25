const button = document.querySelector(".lang");
const heightTxt = document.querySelector("#height-label");
const widthTxt = document.querySelector("#width-label");
const createGrid = document.querySelector("#submit-grid");

button.addEventListener("click", () => {
  button.innerHTML =
    button.innerHTML == "Translate"
      ? button.innerHTML.replace("Translate", "Traduzir")
      : button.innerHTML.replace("Traduzir", "Translate");

  heightTxt.textContent =
    heightTxt.textContent == "Definir Altura"
      ? heightTxt.textContent.replace("Definir Altura", "Grid Height")
      : heightTxt.textContent.replace("Grid Height", "Definir Altura");

  widthTxt.textContent =
    widthTxt.textContent == "Definir Largura"
      ? widthTxt.textContent.replace("Definir Largura", "Grid Width")
      : widthTxt.textContent.replace("Grid Width", "Definir Largura");

  createGrid.innerHTML =
    createGrid.innerHTML == "Criar Tela"
      ? createGrid.innerHTML.replace("Criar Tela", "Create Grid")
      : createGrid.innerHTML.replace("Create Grid", "Criar Tela");
});
