import { gardenAlbum, otucanAlbum } from './audioPlayer.js';

let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;

const audio = new Audio();

const audioPlayer = document.getElementById('audioPlayer');
const maximizeButton = document.getElementById('maximizePlayer');
const minimizeButton = document.getElementById('minimizePlayer');
const infoLink = document.getElementById('infoLink');
const nextAlbumButton = document.getElementById('nextAlbum');

const albumTitle = document.getElementById('albumTitle');
const albumSubtitle = document.getElementById('albumSubtitle');
const tracklist = document.getElementById('tracklist');

const playPauseBtn = document.getElementById('playPause');
const prevTrackBtn = document.getElementById('prevTrack');
const nextTrackBtn = document.getElementById('nextTrack');

const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progressFilled');

const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

function loadAlbum(album) {
  currentAlbum = album;
  currentTrackIndex = 0;
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  tracklist.innerHTML = '';

  album.tracks.forEach((track, index) => {
    const trackDiv = document.createElement('div');
    trackDiv.className = 'track';
    trackDiv.innerHTML = `
      <span class="track-number">${index + 1}.</span>
      <span class="track-title">${track.title}</span>
      <span class="track-duration">${track.length}</span>
    `;
    trackDiv.addEventListener('click', () => {
      currentTrackIndex = index;
      playTrack();
    });
    tracklist.appendChild(trackDiv);
  });

  loadTrack(currentTrackIndex);
}

function loadTrack(index) {
  const track = currentAlbum.tracks[index];
  audio.src = track.url;
  highlightTrack(index);
}

function highlightTrack(index) {
  const tracks = document.querySelectorAll('.track');
  tracks.forEach((el, i) => {
    el.style.backgroundColor = i === index ? 'rgba(255,255,255,0.1)' : 'transparent';
  });
}

function playTrack() {
  loadTrack(currentTrackIndex);
  audio.play();
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  playPauseBtn.innerHTML = audio.paused
    ? `<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`
    : `<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseIcon();
}

function playNextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playTrack();
}

function playPreviousTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  playTrack();
}

audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = `${percent}%`;

  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationDisplay.textContent = formatTime(audio.duration);
});

progress.addEventListener('click', (e) => {
  const rect = progress.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
});

function formatTime(time) {
  if (isNaN(time)) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

// Button listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevTrackBtn.addEventListener('click', playPreviousTrack);
nextTrackBtn.addEventListener('click', playNextTrack);
audio.addEventListener('ended', playNextTrack);

maximizeButton.addEventListener('click', () => {
  audioPlayer.classList.remove('minimized');
  maximizeButton.style.display = 'none';
  infoLink.style.display = 'block';
});

minimizeButton.addEventListener('click', () => {
  audioPlayer.classList.add('minimized');
  maximizeButton.style.display = 'block';
  infoLink.style.display = 'block';
});

nextAlbumButton.addEventListener('click', () => {
  const next = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(next);
});

// Initialize
loadAlbum(gardenAlbum);
audioPlayer.classList.add('minimized');
maximizeButton.style.display = 'block';
infoLink.style.display = 'block';
updatePlayPauseIcon();
