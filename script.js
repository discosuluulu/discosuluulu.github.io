let currentAlbumIndex = 0;
const albums = [gardenAlbum, otucanAlbum];
let currentTrackIndex = 0;
const audio = document.getElementById("audio");

const albumTitle = document.getElementById("album-title");
const albumSubtitle = document.getElementById("album-subtitle");
const tracklist = document.getElementById("tracklist");
const playBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const toggleAlbumBtn = document.getElementById("toggle-album");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const minimizeBtn = document.getElementById("minimize-btn");
const maximizeBtn = document.getElementById("maximize-btn");
const playerContainer = document.querySelector(".player-container");

function loadAlbum(index) {
  const album = albums[index];
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  tracklist.innerHTML = "";
  album.tracks.forEach((track, i) => {
    const li = document.createElement("li");
    li.textContent = `${track.title}`;
    const span = document.createElement("span");
    span.textContent = track.duration;
    li.appendChild(span);
    li.addEventListener("click", () => {
      currentTrackIndex = i;
      loadTrack();
      playAudio();
    });
    tracklist.appendChild(li);
  });
  loadTrack();
}

function loadTrack() {
  const track = albums[currentAlbumIndex].tracks[currentTrackIndex];
  audio.src = track.url;
  updateTrackHighlight();
}

function playAudio() {
  audio.play();
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline";
}

function pauseAudio() {
  audio.pause();
  playIcon.style.display = "inline";
  pauseIcon.style.display = "none";
}

function updateTrackHighlight() {
  const items = tracklist.querySelectorAll("li");
  items.forEach((item, idx) => {
    item.classList.toggle("active", idx === currentTrackIndex);
  });
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

prevBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + albums[currentAlbumIndex].tracks.length) % albums[currentAlbumIndex].tracks.length;
  loadTrack();
  playAudio();
});

nextBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % albums[currentAlbumIndex].tracks.length;
  loadTrack();
  playAudio();
});

toggleAlbumBtn.addEventListener("click", () => {
  currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
  currentTrackIndex = 0;
  loadAlbum(currentAlbumIndex);
  playAudio();
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = Math.floor(audio.duration);
  durationDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = Math.floor(audio.currentTime);
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

minimizeBtn.addEventListener("click", () => {
  playerContainer.style.display = "none";
  maximizeBtn.style.display = "block";
});

maximizeBtn.addEventListener("click", () => {
  playerContainer.style.display = "block";
  maximizeBtn.style.display = "none";
});

loadAlbum(currentAlbumIndex);
