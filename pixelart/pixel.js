let canvas = document.querySelector(".canvas");
let createCanvas = document.getElementById("submit-grid");
let clearCanvas = document.getElementById("clear-grid");
let gridWidth = document.getElementById("width-range");
let gridHeight = document.getElementById("height-range");
let colorTool = document.getElementById("color-input");
let eraseTool = document.getElementById("erase");
let paintTool = document.getElementById("paint");
let widthValue = document.getElementById("width-value");
let heightValue = document.getElementById("height-value");

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

createCanvas.addEventListener("click", () => {
  canvas.innerHTML = "";
  let count = 0;

  for (let i = 0; i < gridHeight.value; i++) {
    count += 2;
    let row = document.createElement("div");
    row.classList.add("canvasRow");

    for (let j = 0; j < gridWidth.value; j++) {
      count += 2;
      let cell = document.createElement("div");
      cell.classList.add("canvasCell");
      cell.setAttribute("id", `canvasCell${count}`);

      cell.addEventListener(events[deviceType].down, () => {
        draw = true;
        if (erase) {
          cell.style.backgroundColor = "transparent";
        } else {
          cell.style.backgroundColor = colorTool.value;
        }
      });

      cell.addEventListener(events[deviceType].move, (e) => {
        let elementId = document.elementFromPoint(
          !isTouchDevice() ? e.clientX : e.touches[0].clientX,
          !isTouchDevice() ? e.clientY : e.touches[0].clientY
        ).id;
        checker(elementId);
      });

      cell.addEventListener(events[deviceType].up, () => {
        draw = false;
      });

      row.appendChild(cell);
    }
    canvas.appendChild(row);
  }
  canvas.style.borderColor = "#aaa";
});

function checker(elementId) {
  let gridColumns = document.querySelectorAll(".canvasCell");
  gridColumns.forEach((element) => {
    if (elementId == element.id) {
      if (draw && !erase) {
        element.style.backgroundColor = colorTool.value;
      } else if (draw && erase) {
        element.style.backgroundColor = "transparent";
      }
    }
  });
}

clearCanvas.addEventListener("click", () => {
  canvas.innerHTML = "";
  canvas.style.borderColor = "transparent";
});

eraseTool.addEventListener("click", () => {
  erase = true;
});

paintTool.addEventListener("click", () => {
  erase = false;
});

gridWidth.addEventListener("input", () => {
  widthValue.innerHTML = gridWidth.value.padStart(2, "0");
});

gridHeight.addEventListener("input", () => {
  heightValue.innerHTML = gridHeight.value.padStart(2, "0");
});

window.onload = () => {
  gridWidth.value = 0;
  gridHeight.value = 0;
};
