const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekbar = document.getElementById('seekbar');

// Función para cambiar entre reproducir y pausar
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
    }
}

// Actualizar la barra de progreso en tiempo real
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekbar.value = progress;
});

// Cambiar la posición del audio cuando el usuario mueva la barra de progreso
function seekAudio() {
    const seekTo = (seekbar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTo;
}

// Función para silenciar o activar el volumen
function muteUnmute() {
    audioPlayer.muted = !audioPlayer.muted;
}
