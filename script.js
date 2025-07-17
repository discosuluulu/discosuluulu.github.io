let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;
let isPlaying = false;

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const tracklist = document.getElementById("tracklist");
const playPauseBtn = document.getElementById("playPause");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const prevTrackBtn = document.getElementById("prevTrack");
const nextTrackBtn = document.getElementById("nextTrack");
const nextAlbumBtn = document.getElementById("nextAlbum");
const minimizeBtn = document.getElementById("minimizePlayer");
const maximizeBtn = document.getElementById("maximizePlayer");
const playerContainer = document.getElementById("audioPlayer");
const infoLink = document.getElementById("infoLink");
const progressBar = document.getElementById("progress");
const progressFilled = document.getElementById("progressFilled");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

const audio = new Audio();
audio.preload = "metadata";

function loadAlbum(album) {
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  tracklist.innerHTML = "";

  album.tracks.forEach((track, index) => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `
      <span class="track-number">${index + 1}.</span>
      <span class="track-title">${track.title}</span>
      <span class="track-length">${track.length}</span>
    `;
    div.addEventListener("click", () => playTrack(index));
    tracklist.appendChild(div);
  });

  playTrack(0);
}

function playTrack(index) {
  currentTrackIndex = index;
  audio.src = currentAlbum.tracks[index].url;
  updateTracklistHighlight();
  audio.play();
  isPlaying = true;
  showPauseIcon();
}

function updateTracklistHighlight() {
  const allTracks = document.querySelectorAll(".track");
  allTracks.forEach((track, i) => {
    track.classList.toggle("playing", i === currentTrackIndex);
  });
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    showPlayIcon();
  } else {
    audio.play();
    isPlaying = true;
    showPauseIcon();
  }
}

function showPlayIcon() {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
}

function showPauseIcon() {
  playIcon.style.display = "none";
  pauseIcon.style.display = "block";
}

function playNextTrack() {
  if (currentTrackIndex < currentAlbum.tracks.length - 1) {
    playTrack(currentTrackIndex + 1);
  }
}

function playPrevTrack() {
  if (currentTrackIndex > 0) {
    playTrack(currentTrackIndex - 1);
  }
}

function switchAlbum() {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(currentAlbum);
}

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = `${progress}%`;

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
}

function seek(e) {
  const rect = progressBar.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  audio.currentTime = percent * audio.duration;
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", playNextTrack);
progressBar.addEventListener("click", seek);

playPauseBtn.addEventListener("click", togglePlayPause);
prevTrackBtn.addEventListener("click", playPrevTrack);
nextTrackBtn.addEventListener("click", playNextTrack);
nextAlbumBtn.addEventListener("click", switchAlbum);
minimizeBtn.addEventListener("click", () => {
  playerContainer.classList.add("hidden");
  maximizeBtn.style.display = "block";
  infoLink.style.display = "block";
});
maximizeBtn.addEventListener("click", () => {
  playerContainer.classList.remove("hidden");
  maximizeBtn.style.display = "none";
  infoLink.style.display = "block";
});

window.addEventListener("DOMContentLoaded", () => {
  loadAlbum(currentAlbum);
});
