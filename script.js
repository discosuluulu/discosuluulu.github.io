let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;
let isPlaying = false;

const audio = new Audio();
const albumTitle = document.getElementById('albumTitle');
const albumSubtitle = document.getElementById('albumSubtitle');
const tracklist = document.getElementById('tracklist');
const playPauseBtn = document.getElementById('playPause');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progressFilled');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const audioPlayer = document.getElementById('audioPlayer');
const maximizePlayer = document.getElementById('maximizePlayer');
const minimizePlayer = document.getElementById('minimizePlayer');

function loadAlbum(album) {
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  tracklist.innerHTML = '';
  album.tracks.forEach((track, index) => {
    const trackDiv = document.createElement('div');
    trackDiv.innerHTML = `<span>${index + 1}. ${track.title}</span><span>${track.length}</span>`;
    trackDiv.addEventListener('click', () => {
      currentTrackIndex = index;
      loadTrack();
      playAudio();
    });
    tracklist.appendChild(trackDiv);
  });
  loadTrack();
}

function loadTrack() {
  audio.src = currentAlbum.tracks[currentTrackIndex].url;
}

function playAudio() {
  audio.play();
  isPlaying = true;
  playIcon.style.display = 'none';
  pauseIcon.style.display = 'inline';
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playIcon.style.display = 'inline';
  pauseIcon.style.display = 'none';
}

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

document.getElementById('nextTrack').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  loadTrack();
  playAudio();
});

document.getElementById('prevTrack').addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  loadTrack();
  playAudio();
});

document.getElementById('nextAlbum').addEventListener('click', () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  currentTrackIndex = 0;
  loadAlbum(currentAlbum);
});

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = `${percent}%`;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationDisplay.textContent = formatTime(audio.duration);
});

progress.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const width = progress.clientWidth;
  const percent = clickX / width;
  audio.currentTime = percent * audio.duration;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60) || 0;
  const seconds = Math.floor(time % 60) || 0;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Maximize/Minimize toggle
maximizePlayer.addEventListener('click', () => {
  audioPlayer.classList.remove('hidden');
});

minimizePlayer.addEventListener('click', () => {
  audioPlayer.classList.add('hidden');
});

loadAlbum(currentAlbum);
