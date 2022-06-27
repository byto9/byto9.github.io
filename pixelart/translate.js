const button = document.querySelector(".lang");
const heightTxt = document.querySelector("#height-label");
const widthTxt = document.querySelector("#width-label");
const createGrid = document.querySelector("#submit-grid");
const clearGrid = document.querySelector("#clear-grid");
const paintBtn = document.querySelector("#paint");
const eraseBtn = document.querySelector("#erase");

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

  clearGrid.innerHTML =
    clearGrid.innerHTML == "Limpar"
      ? clearGrid.innerHTML.replace("Limpar", "Clear")
      : clearGrid.innerHTML.replace("Clear", "Limpar");

  paintBtn.innerHTML =
    paintBtn.innerHTML == "Pintar"
      ? paintBtn.innerHTML.replace("Pintar", "Paint")
      : paintBtn.innerHTML.replace("Paint", "Pintar");

  eraseBtn.innerHTML =
    eraseBtn.innerHTML == "Apagar"
      ? eraseBtn.innerHTML.replace("Apagar", "Erase")
      : eraseBtn.innerHTML.replace("Erase", "Apagar");
});
