function translateEn() {
  document.getElementById("height-label").textContent =
    document.getElementById("height-label").textContent <= "Definir Altura"
      ? document
          .getElementById("height-label")
          .textContent.replace("Definir Altura", "Grid Height")
      : document.getElementById("height-label").textContent;

  document.getElementById("width-label").textContent =
    document.getElementById("width-label").textContent <= "Definir Largura"
      ? document
          .getElementById("width-label")
          .textContent.replace("Definir Largura", "Grid Width")
      : document.getElementById("width-label").textContent;

  document.getElementById("submit-grid").textContent =
    document.getElementById("submit-grid").textContent <= "Criar Tela"
      ? document
          .getElementById("submit-grid")
          .textContent.replace("Criar Tela", "Create Grid")
      : document.getElementById("submit-grid").textContent;

  document.getElementById("clear-grid").textContent =
    document.getElementById("clear-grid").textContent <= "Limpar"
      ? document
          .getElementById("clear-grid")
          .textContent.replace("Limpar", "Clear")
      : document.getElementById("clear-grid").textContent;

  document.getElementById("paint").textContent =
    document.getElementById("paint").textContent <= "Pintar"
      ? document.getElementById("paint").textContent.replace("Pintar", "Paint")
      : document.getElementById("paint").textContent;

  document.getElementById("erase").textContent =
    document.getElementById("erase").textContent <= "Apagar"
      ? document.getElementById("erase").textContent.replace("Apagar", "Erase")
      : document.getElementById("erase").textContent;
}

function translatePt() {
  document.getElementById("height-label").textContent =
    document.getElementById("height-label").textContent <= "Grid Height"
      ? document
          .getElementById("height-label")
          .textContent.replace("Grid Height", "Definir Altura")
      : document.getElementById("height-label").textContent;

  document.getElementById("width-label").textContent =
    document.getElementById("width-label").textContent <= "Grid Width"
      ? document
          .getElementById("width-label")
          .textContent.replace("Grid Width", "Definir Largura")
      : document.getElementById("width-label").textContent;

  document.getElementById("submit-grid").textContent =
    document.getElementById("submit-grid").textContent <= "Create Grid"
      ? document
          .getElementById("submit-grid")
          .textContent.replace("Create Grid", "Criar Tela")
      : document.getElementById("submit-grid").textContent;

  document.getElementById("clear-grid").textContent =
    document.getElementById("clear-grid").textContent <= "Clear"
      ? document
          .getElementById("clear-grid")
          .textContent.replace("Clear", "Limpar")
      : document.getElementById("clear-grid").textContent;

  document.getElementById("paint").textContent =
    document.getElementById("paint").textContent <= "Paint"
      ? document.getElementById("paint").textContent.replace("Paint", "Pintar")
      : document.getElementById("paint").textContent;

  document.getElementById("erase").textContent =
    document.getElementById("erase").textContent <= "Erase"
      ? document.getElementById("erase").textContent.replace("Erase", "Apagar")
      : document.getElementById("erase").textContent;
}
