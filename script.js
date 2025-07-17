import { gardenAlbum, otucanAlbum } from './audioPlayer.js';

let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;

const audio = new Audio();
const audioPlayer = document.getElementById('audioPlayer');
const exploreButton = document.getElementById('exploreButton');
const minimizeButton = document.getElementById('minimizePlayer');
const nextAlbumButton = document.getElementById('nextAlbum');
const playPause = document.getElementById('playPause');
const prevTrack = document.getElementById('prevTrack');
const nextTrack = document.getElementById('nextTrack');
const progressBar = document.getElementById('progressFilled');
const progressContainer = document.getElementById('progress');
const tracklist = document.getElementById('tracklist');

function loadAlbum(album) {
  currentAlbum = album;
  currentTrackIndex = 0;
  document.getElementById('albumTitle').textContent = album.title;
  document.getElementById('albumSubtitle').textContent = album.subtitle;
  tracklist.innerHTML = '';

  album.tracks.forEach((track, i) => {
    const div = document.createElement('div');
    div.className = 'track';
    div.innerHTML = `
      <span>${i + 1}. ${track.title}</span>
      <span>${track.duration}</span>
    `;
    div.addEventListener('click', () => {
      currentTrackIndex = i;
      playTrack();
    });
    tracklist.appendChild(div);
  });

  loadTrack(currentTrackIndex);
}

function loadTrack(index) {
  audio.src = currentAlbum.tracks[index].url;
  highlightTrack(index);
}

function highlightTrack(index) {
  const tracks = document.querySelectorAll('.track');
  tracks.forEach((track, i) => {
    track.style.backgroundColor = i === index ? 'rgba(255,255,255,0.1)' : 'transparent';
  });
}

function playTrack() {
  loadTrack(currentTrackIndex);
  audio.play();
  updatePlayButton();
}

function togglePlayPause() {
  if (audio.paused) audio.play();
  else audio.pause();
  updatePlayButton();
}

function updatePlayButton() {
  playPause.innerHTML = audio.paused
    ? `<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`
    : `<svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
}

function playNext() {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playTrack();
}

function playPrev() {
  currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  playTrack();
}

// Events
playPause.addEventListener('click', togglePlayPause);
nextTrack.addEventListener('click', playNext);
prevTrack.addEventListener('click', playPrev);
nextAlbumButton.addEventListener('click', () => {
  loadAlbum(currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum);
});
minimizeButton.addEventListener('click', () => {
  audioPlayer.classList.add('minimized');
  exploreButton.style.display = 'block';
});
exploreButton.addEventListener('click', () => {
  audioPlayer.classList.remove('minimized');
  exploreButton.style.display = 'none';
});

// Progress bar
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
});

progressContainer.addEventListener('click', (e) => {
  const rect = progressContainer.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
});

audio.addEventListener('ended', playNext);

// Initialize
loadAlbum(gardenAlbum);
updatePlayButton();
