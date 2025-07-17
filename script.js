let currentAlbumIndex = 0;
const albums = [gardenAlbum, otucanAlbum];
let currentTrackIndex = 0;
let isPlaying = false;

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const tracklist = document.getElementById("tracklist");
const playPauseBtn = document.getElementById("playPause");
const prevBtn = document.getElementById("prevTrack");
const nextBtn = document.getElementById("nextTrack");
const progress = document.getElementById("progress");
const progressFilled = document.getElementById("progressFilled");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");

const audio = new Audio();

function loadAlbum(index) {
  const album = albums[index];
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;

  tracklist.innerHTML = "";
  album.tracks.forEach((track, i) => {
    const trackDiv = document.createElement("div");
    trackDiv.classList.add("track");
    trackDiv.dataset.index = i;
    trackDiv.innerHTML = `<span>${i + 1}. ${track.title}</span><span>${track.length}</span>`;
    tracklist.appendChild(trackDiv);
  });

  loadTrack(0);
  updateTrackHighlight();
}

function loadTrack(index) {
  const track = albums[currentAlbumIndex].tracks[index];
  audio.src = track.url;
  currentTrackIndex = index;
}

function updateTrackHighlight() {
  document.querySelectorAll(".track").forEach(el => el.classList.remove("playing"));
  const currentTrack = tracklist.querySelector(`[data-index="${currentTrackIndex}"]`);
  if (currentTrack) currentTrack.classList.add("playing");
}

function playTrack() {
  audio.play();
  isPlaying = true;
  updatePlayPauseIcon();
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  playPauseBtn.innerHTML = isPlaying
    ? `<svg viewBox="0 0 24 24" width="24" height="24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
    : `<svg viewBox="0 0 24 24" width="24" height="24"><polygon points="5,3 19,12 5,21"/></svg>`;
}

function nextTrack() {
  currentTrackIndex++;
  if (currentTrackIndex >= albums[currentAlbumIndex].tracks.length) {
    currentTrackIndex = 0;
  }
  loadTrack(currentTrackIndex);
  playTrack();
  updateTrackHighlight();
}

function prevTrack() {
  currentTrackIndex--;
  if (currentTrackIndex < 0) {
    currentTrackIndex = albums[currentAlbumIndex].tracks.length - 1;
  }
  loadTrack(currentTrackIndex);
  playTrack();
  updateTrackHighlight();
}

playPauseBtn.addEventListener("click", () => {
  isPlaying ? pauseTrack() : playTrack();
});

nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

tracklist.addEventListener("click", e => {
  const trackEl = e.target.closest(".track");
  if (trackEl) {
    const index = parseInt(trackEl.dataset.index);
    loadTrack(index);
    playTrack();
    updateTrackHighlight();
  }
});

document.getElementById("nextAlbum").addEventListener("click", () => {
  currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
  loadAlbum(currentAlbumIndex);
  playTrack();
  updateTrackHighlight();
});

audio.addEventListener("ended", nextTrack);

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = percent + "%";
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  durationDisplay.textContent = formatTime(audio.duration);
});

progress.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progress.clientWidth;
  const percent = clickX / width;
  audio.currentTime = percent * audio.duration;
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60) || 0;
  const secs = Math.floor(seconds % 60) || 0;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Minimize/Maximize
const audioPlayer = document.getElementById("audioPlayer");
const maximizeBtn = document.getElementById("maximizePlayer");
const minimizeBtn = document.getElementById("minimizePlayer");
const logo = document.getElementById("logo");
const infoLink = document.getElementById("infoLink");

maximizeBtn.addEventListener("click", () => {
  audioPlayer.classList.add("show");
  logo.classList.add("logo-small");
  infoLink.style.display = "block";
});

minimizeBtn.addEventListener("click", () => {
  audioPlayer.classList.remove("show");
  logo.classList.remove("logo-small");
});

// Initial Load
window.addEventListener("DOMContentLoaded", () => {
  loadAlbum(currentAlbumIndex);
});
