// Music Player
const music = document.getElementById('bgMusic');
const toggleBtn = document.getElementById('musicToggle');
const playIcon = toggleBtn.querySelector('.icon-play');
const pauseIcon = toggleBtn.querySelector('.icon-pause');
const musicLabel = document.querySelector('.music-label');

let isPlaying = false;

// Set volume rendah biar nyaman
music.volume = 0.35;

toggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    toggleBtn.classList.remove('playing');
    musicLabel.textContent = 'Putar Musik';
  } else {
    music.play().catch(err => {
      console.log('Autoplay dicegah browser. Klik lagi ya.');
    });
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
    toggleBtn.classList.add('playing');
    musicLabel.textContent = 'Musik Berjalan';
  }
  isPlaying = !isPlaying;
});

// Optional: pause when page is hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden && isPlaying) {
    music.pause();
  }
});
