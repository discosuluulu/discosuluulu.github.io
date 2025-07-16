let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;
let audio = new Audio();
let isPlaying = false;

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const trackList = document.getElementById("trackList");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");

document.getElementById("exploreBtn").onclick = () => {
  document.querySelector(".logo-container").classList.add("hidden");
  document.getElementById("audioPlayer").classList.remove("hidden");
  loadAlbum(currentAlbum);
  playTrack(0);
};

document.getElementById("toggleAlbumBtn").onclick = () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(currentAlbum);
  playTrack(0);
};

document.getElementById("minimizeBtn").onclick = () => {
  document.getElementById("audioPlayer").classList.add("hidden");
  document.getElementById("maximizeBtn").classList.remove("hidden");
};

document.getElementById("maximizeBtn").onclick = () => {
  document.getElementById("audioPlayer").classList.remove("hidden");
  document.getElementById("maximizeBtn").classList.add("hidden");
};

function loadAlbum(album) {
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = "";
  album.tracks.forEach((track, i) => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `<span>${i + 1}. ${track.title}</span><span>${track.length}</span>`;
    div.onclick = () => playTrack(i);
    trackList.appendChild(div);
  });
}

function playTrack(index) {
  currentTrackIndex = index;
  const track = currentAlbum.tracks[index];
  audio.src = track.url;
  audio.play();
  isPlaying = true;
  updatePlayPauseBtn();
}

playPauseBtn.onclick = () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
  updatePlayPauseBtn();
};

prevBtn.onclick = () => {
  if (currentTrackIndex > 0) playTrack(currentTrackIndex - 1);
};

nextBtn.onclick = () => {
  if (currentTrackIndex < currentAlbum.tracks.length - 1) playTrack(currentTrackIndex + 1);
};

function updatePlayPauseBtn() {
  playPauseBtn.textContent = isPlaying ? "⏸" : "▶";
}

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;
  totalTimeDisplay.textContent = formatTime(audio.duration);
});

progressBar.oninput = () => {
  audio.currentTime = progressBar.value;
};

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
