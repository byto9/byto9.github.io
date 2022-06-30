const btn = document.querySelector(".random");

const refresh = () => {
  location.reload();
};

btn.addEventListener("click", refresh);
