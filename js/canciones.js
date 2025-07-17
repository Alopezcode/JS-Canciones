// Lista con canciones
if (!localStorage.getItem("canciones")) {
  const canciones = [
    "Cantares - Serrat",
    "Tiene que ser pecado - Alejandro Sanz",
    "Duermes - Ismael Serrano",
    "Gracias - Luis Fercan",
    "Amor a la mexicana - Polo Wind"
  ];
  localStorage.setItem("canciones", JSON.stringify(canciones));
}
const canciones = JSON.parse(localStorage.getItem("canciones"));

const links = [
  "https://www.youtube.com/embed/8tHLw8FHlCE?autoplay=1",
  "https://www.youtube.com/embed/m9PYbLuHKYc?autoplay=1",
  "https://www.youtube.com/embed/O_wqH7DDSBw?autoplay=1",
  "https://www.youtube.com/embed/-403N2wz3y8?autoplay=1",
  "https://www.youtube.com/embed/q9H1AVRAWls?autoplay=1"
];

function quitarReproductor() {
  const player = document.getElementById("youtube-player");
  if (player) player.remove();
}

function mostrarReproductor(idx) {
  quitarReproductor();
  const div = document.createElement("div");
  div.id = "youtube-player";
  div.className = "youtube-player"; 
  div.innerHTML = `<iframe width="400" height="225" src="${links[idx]}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  document.getElementById("resultado").appendChild(div);
}
// mis canciones disponibles
function mostrarCanciones() {
  let msg = "🎶 Canciones disponibles:<br>";
  for (let i = 0; i < canciones.length; i++) {
    msg += (i + 1) + ". " + canciones[i] + "<br>";
  }
  document.getElementById("resultado").innerHTML = msg;
  quitarReproductor();
}

// seleccion de canciones
function seleccionarPorNumero() {
  const numStr = document.getElementById("numero").value;
  const idx = parseInt(numStr) - 1;
  if (!isNaN(idx) && idx >= 0 && idx < canciones.length) {
    document.getElementById("resultado").innerHTML = "Has seleccionado:<br>" + canciones[idx];
    mostrarReproductor(idx);
  } else {
    document.getElementById("resultado").innerHTML = "Número inválido. No seleccionaste canción.";
    quitarReproductor();
  }
}

// selección aleatoria
function seleccionarAleatoria() {
  const idx = Math.floor(Math.random() * canciones.length);
  document.getElementById("resultado").innerHTML = "La canción elegida al azar es:<br>" + canciones[idx];
  mostrarReproductor(idx);
}


function salir() {
  document.body.innerHTML = "<h2>👋 ¡Hasta luego!</h2>";
}

document.getElementById("ver").onclick = mostrarCanciones;
document.getElementById("seleccionar").onclick = seleccionarPorNumero;
document.getElementById("aleatoria").onclick = seleccionarAleatoria;
document.getElementById("salir").onclick = salir;

