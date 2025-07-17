import { gardenAlbum, otucanAlbum } from './audioPlayer.js';

let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;

const audio = new Audio();
const audioPlayer = document.getElementById('audioPlayer');
const exploreButton = document.getElementById('exploreButton');
const infoLink = document.getElementById('infoLink');
const minimizeButton = document.getElementById('minimizeButton');
const nextAlbumButton = document.getElementById('nextAlbumButton');
const trackList = document.getElementById('trackList');
const controls = {
  play: document.getElementById('playButton'),
  prev: document.getElementById('prevButton'),
  next: document.getElementById('nextButton')
};
const progressContainer = document.getElementById('progressContainer');
const progressBar = document.getElementById('progressBar');

function loadAlbum(album) {
  currentAlbum = album;
  currentTrackIndex = 0;
  document.getElementById('albumTitle').textContent = album.title;
  document.getElementById('albumSubtitle').textContent = album.subtitle;
  trackList.innerHTML = '';

  album.tracks.forEach((track, index) => {
    const trackDiv = document.createElement('div');
    trackDiv.classList.add('track');
    trackDiv.innerHTML = `
      <span class="track-number">${index + 1}.</span>
      <span class="track-title">${track.title}</span>
      <span class="track-duration">${track.duration}</span>
    `;
    trackDiv.addEventListener('click', () => {
      currentTrackIndex = index;
      playTrack();
    });
    trackList.appendChild(trackDiv);
  });

  loadTrack(currentTrackIndex);
}

function loadTrack(index) {
  const track = currentAlbum.tracks[index];
  audio.src = track.url;
  highlightTrack(index);
}

function highlightTrack(index) {
  document.querySelectorAll('.track').forEach((el, i) => {
    el.style.backgroundColor = i === index ? 'rgba(255,255,255,0.1)' : 'transparent';
  });
}

function playTrack() {
  loadTrack(currentTrackIndex);
  audio.play();
  updatePlayButton();
}

function updatePlayButton() {
  controls.play.innerHTML = audio.paused
    ? `<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`
    : `<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayButton();
}

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playTrack();
}

function playPreviousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  playTrack();
}

// Progress bar
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

progressContainer.addEventListener('click', (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
});

// UI Button Events
exploreButton.addEventListener('click', () => {
  audioPlayer.classList.remove('minimized');
  document.body.classList.add('audio-visible');
  exploreButton.style.display = 'none';
});

minimizeButton.addEventListener('click', () => {
  audioPlayer.classList.add('minimized');
  document.body.classList.remove('audio-visible');
  exploreButton.style.display = 'block';
});

nextAlbumButton.addEventListener('click', () => {
  loadAlbum(currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum);
});

// Controls
controls.play.addEventListener('click', togglePlayPause);
controls.next.addEventListener('click', playNextTrack);
controls.prev.addEventListener('click', playPreviousTrack);
audio.addEventListener('ended', playNextTrack);

// Initialize
audioPlayer.classList.add('minimized');
exploreButton.style.display = 'block';
infoLink.style.display = 'block';
loadAlbum(gardenAlbum);
updatePlayButton();
