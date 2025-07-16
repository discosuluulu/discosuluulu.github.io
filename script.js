let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;
const audio = new Audio();

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const trackList = document.getElementById("trackList");
const playPauseBtn = document.getElementById("playPauseBtn");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");
const nextAlbumBtn = document.getElementById("nextAlbumBtn");
const exploreBtn = document.getElementById("exploreBtn");
const audioPlayerContainer = document.getElementById("audioPlayerContainer");
const minimizeBtn = document.getElementById("minimizeBtn");

function loadAlbum(album) {
  currentAlbum = album;
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = "";
  album.tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${index + 1}. ${track.title}</span><span>${track.length}</span>`;
    li.addEventListener("click", () => playTrack(index));
    trackList.appendChild(li);
  });
  playTrack(0);
}

function playTrack(index) {
  currentTrackIndex = index;
  const track = currentAlbum.tracks[index];
  audio.src = track.url;
  audio.play();
  updatePlayPauseIcon();
  highlightCurrentTrack();
}

function highlightCurrentTrack() {
  [...trackList.children].forEach((li, i) => {
    li.style.fontWeight = i === currentTrackIndex ? "bold" : "normal";
  });
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (audio.paused) {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  }
}

function playNext() {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playTrack(currentTrackIndex);
}

function playPrev() {
  currentTrackIndex =
    (currentTrackIndex - 1 + currentAlbum.tracks.length) %
    currentAlbum.tracks.length;
  playTrack(currentTrackIndex);
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
}

audio.addEventListener("timeupdate", () => {
  progressBar.max = audio.duration;
  progressBar.value = audio.currentTime;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
  totalTimeDisplay.textContent = formatTime(audio.duration || 0);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

audio.addEventListener("ended", playNext);

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);
nextAlbumBtn.addEventListener("click", () => {
  loadAlbum(currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum);
});

minimizeBtn.addEventListener("click", () => {
  audioPlayerContainer.classList.add("hidden");
  exploreBtn.style.display = "block";
});

exploreBtn.addEventListener("click", () => {
  audioPlayerContainer.classList.remove("hidden");
  exploreBtn.style.display = "none";
});

// Start the player visible and load first album
loadAlbum(gardenAlbum);
audioPlayerContainer.classList.remove("hidden");
