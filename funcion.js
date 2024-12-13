document.querySelector('.gift-container').addEventListener('click', function (event) {
  const letter = document.querySelector('.letter');
  const gift = document.querySelector('.gift');  // Seleccionamos el contenedor del GIF
  
  // Cambiar el estado de la carta
  letter.classList.toggle('open');
  
  if (letter.classList.contains('open')) {
    // Al abrir la carta, reproducir el GIF
    gift.style.animationPlayState = 'running';  // Inicia la animación del GIF
  } else {
    // Al cerrar la carta, pausar el GIF
    gift.style.animationPlayState = 'paused';  // Pausa la animación del GIF
  }

  event.stopPropagation(); // Evitar que el evento se propague
});

document.addEventListener('click', function () {
  const letter = document.querySelector('.letter');
  if (letter.classList.contains('open')) {
    letter.classList.remove('open');
  }
});

function Audios() {
  const audio = document.getElementById('audio');
  audio.play();
}
