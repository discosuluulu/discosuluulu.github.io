let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;
const audio = new Audio();

const albumTitle = document.getElementById('albumTitle');
const albumSubtitle = document.getElementById('albumSubtitle');
const trackList = document.getElementById('trackList');
const playPauseBtn = document.getElementById('playPause');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const prevBtn = document.getElementById('prevTrack');
const nextBtn = document.getElementById('nextTrack');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

const nextAlbumBtn = document.getElementById('nextAlbumBtn');
const maximizePlayer = document.getElementById('maximizePlayer');
const minimizePlayer = document.getElementById('minimizePlayer');

function loadAlbum(album) {
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = '';
  album.tracks.forEach((track, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${i + 1}. ${track.title}</span><span>${track.length}</span>`;
    li.addEventListener('click', () => {
      currentTrackIndex = i;
      playTrack();
    });
    trackList.appendChild(li);
  });
}

function highlightTrack() {
  [...trackList.children].forEach((li, i) => {
    li.classList.toggle('active', i === currentTrackIndex);
  });
}

function playTrack() {
  const track = currentAlbum.tracks[currentTrackIndex];
  audio.src = track.url;
  audio.play();
  updatePlayPauseIcons();
  highlightTrack();
}

function updatePlayPauseIcons() {
  const isPaused = audio.paused;
  playIcon.style.display = isPaused ? 'inline' : 'none';
  pauseIcon.style.display = isPaused ? 'none' : 'inline';
}

playPauseBtn.addEventListener('click', () => {
  if (audio.src) {
    audio.paused ? audio.play() : audio.pause();
  } else {
    playTrack();
  }
  updatePlayPauseIcons();
});

prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  playTrack();
});

nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playTrack();
});

audio.addEventListener('timeupdate', () => {
  progressBar.value = audio.currentTime;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
  progressBar.max = audio.duration;
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
  audio.currentTime = progressBar.value;
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

nextAlbumBtn.addEventListener('click', () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  currentTrackIndex = 0;
  loadAlbum(currentAlbum);
  playTrack();
});

maximizePlayer.addEventListener('click', () => {
  document.body.classList.add('player-active');
});

minimizePlayer.addEventListener('click', () => {
  document.body.classList.remove('player-active');
});

loadAlbum(currentAlbum);
