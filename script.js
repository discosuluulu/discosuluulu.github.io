// Load albums from audioPlayer.js
let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;

const audio = new Audio();
const logo = document.getElementById('logo');
const audioPlayer = document.getElementById('audioPlayer');
const maximizeBtn = document.getElementById('maximizePlayer');
const minimizeBtn = document.getElementById('minimizePlayer');
const albumTitle = document.getElementById('albumTitle');
const albumSubtitle = document.getElementById('albumSubtitle');
const trackList = document.getElementById('trackList');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const nextAlbumBtn = document.getElementById('nextAlbumBtn');

// Show player
maximizeBtn.addEventListener('click', () => {
  audioPlayer.classList.add('show');
  maximizeBtn.style.display = 'none';
  logo.classList.add('shrink');
});

// Minimize player
minimizeBtn.addEventListener('click', () => {
  audioPlayer.classList.remove('show');
  maximizeBtn.style.display = 'block';
});

// Load album into player
function loadAlbum(album) {
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = '';

  album.tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${index + 1}. ${track.title}</span><span>${track.length}</span>`;
    li.addEventListener('click', () => playTrack(index));
    trackList.appendChild(li);
  });
}

// Play track
function playTrack(index) {
  currentTrackIndex = index;
  const track = currentAlbum.tracks[index];
  audio.src = track.url;
  audio.play();
  updatePlayPauseButton();
}

// Toggle play/pause
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseButton();
}

// Update play/pause button SVG
function updatePlayPauseButton() {
  playPauseBtn.innerHTML = audio.paused
    ? `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>` // play icon
    : `<svg viewBox="0 0 24 24"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>`; // pause icon
}

// Go to next/previous track
function nextTrack() {
  if (currentTrackIndex < currentAlbum.tracks.length - 1) {
    playTrack(currentTrackIndex + 1);
  }
}
function prevTrack() {
  if (currentTrackIndex > 0) {
    playTrack(currentTrackIndex - 1);
  }
}

// Progress bar logic
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percent || 0;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationDisplay.textContent = formatTime(audio.duration);
});
progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// Format time helper
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

// Switch albums
nextAlbumBtn.addEventListener('click', () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(currentAlbum);
  playTrack(0);
});

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// Initialize
loadAlbum(currentAlbum);
