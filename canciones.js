// Lista con canciones
const canciones = [
  "Cantares - Serrat",
  "Tiene que ser pecado - Alejandro Sanz",
  "Duermes - Ismael Serrano",
  "Gracias - Luis Fercan",
  "Amor a la mexicana - Polo Wind"
];

// mis canciones disponibles
function mostrarCanciones() {
  let msg = "🎶 Canciones disponibles:\n";
  for (let i = 0; i < canciones.length; i++) {
    msg += `${i + 1}. ${canciones[i]}\n`;
  }
  alert(msg);
}

// seleccion de canciones
function seleccionarPorNumero() {
  const numStr = prompt(`Ingresa el número de la canción (1 a ${canciones.length}):`);
  const idx = parseInt(numStr) - 1;
  if (!isNaN(idx) && idx >= 0 && idx < canciones.length) {
    alert(`Has seleccionado:\n${canciones[idx]}`);
  } else {
    alert("Número inválido. No seleccionaste canción.");
  }
}

// selección aleatoria
function seleccionarAleatoria() {
  if (confirm("¿Quieres que el sistema elija una canción al azar?")) {
    const idx = Math.floor(Math.random() * canciones.length);
    alert(`La canción elegida al azar es:\n${canciones[idx]}`);
  } else {
    alert("Vale, no se seleccionó nada.");
  }
}

// while
function menu() {
  alert("🎵 Bienvenido al selector de canciones");
  let seguir = true;

  while (seguir) {
    const opcion = prompt(
      "Opciones:\n" +
      "1: Ver canciones\n" +
      "2: Seleccionar por número\n" +
      "3: Selección aleatoria\n" +
      "4: Salir"
    );

    if (opcion === "1") {
      mostrarCanciones();
    } else if (opcion === "2") {
      seleccionarPorNumero();
    } else if (opcion === "3") {
      seleccionarAleatoria();
    } else if (opcion === "4") {
      seguir = confirm("¿Seguro que deseas salir?");
    } else {
      alert("Opción inválida, inténtalo de nuevo.");
    }
  }

  alert("👋 ¡Hasta luego!");
}

// menú 
menu();
