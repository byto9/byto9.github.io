function realTime() {
  const refresh = 1000;
  setTimeout("displayTime()", refresh);
}

function displayTime() {
  const t = new Date();

  const day = t.getDate().toString().padStart(2, "0");
  const month = (t.getMonth() + 1).toString().padStart(2, "0");
  const year = t.getFullYear().toString().padStart(2, "0");

  const hour = t.getHours().toString().padStart(2, "0");
  const min = t.getMinutes().toString().padStart(2, "0");
  const sec = t.getSeconds().toString().padStart(2, "0");

  const calendar = `${day}/${month}/${year}`;
  const clock = `${hour}:${min}:${sec}`;

  const clockTxt = document.getElementById("time");
  const bg = document.body.style;

  clockTxt.innerHTML =
    hour >= 0 && hour < 5
      ? `${calendar}<br>${clock}<br><br>ZzZ...`
      : hour >= 5 && hour < 12
      ? `${calendar}<br>${clock}<br><br>Bom dia!`
      : hour >= 12 && hour < 18
      ? `${calendar}<br>${clock}<br><br>Boa tarde!`
      : hour >= 18 && hour <= 23
      ? `${calendar}<br>${clock}<br><br>Boa noite!`
      : clockTxt.innerHTML;

  bg.backgroundImage =
    hour >= 0 && hour < 5
      ? "url('madrugada.png')"
      : hour >= 5 && hour < 12
      ? "url('manha.png')"
      : hour >= 12 && hour < 15
      ? "url('tarde1.png')"
      : hour >= 15 && hour < 18
      ? "url('tarde2.png')"
      : hour >= 18 && hour <= 23
      ? "url('noite.png')"
      : bg.backgroundImage;

  realTime();
}
