const gardenAlbum = {
  title: "Garden de La Selva",
  subtitle: "Shaped by shakers grown from okra harvests",
  tracks: [
    { title: "Rubba Dubba", length: "3:12", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3" },
    { title: "Blue", length: "2:57", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2002%20Blue.mp3" },
    // ... add remaining tracks
  ]
};

const otucanAlbum = {
  title: "O tú can",
  subtitle: "Recorded with one microphone in a palm frond wall rancho",
  tracks: [
    { title: "Que Gata", length: "2:45", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3" },
    // ... add remaining tracks
  ]
};

let albums = [gardenAlbum, otucanAlbum];
let currentAlbumIndex = 0;
let currentTrackIndex = 0;
let audio = new Audio();

const exploreBtn = document.getElementById("exploreBtn");
const audioPlayer = document.getElementById("audioPlayer");
const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const tracklist = document.getElementById("tracklist");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");

exploreBtn.addEventListener("click", () => {
  audioPlayer.classList.remove("hidden");
  exploreBtn.style.display = "none";
  loadAlbum(currentAlbumIndex);
  playTrack(currentTrackIndex);
});

function loadAlbum(index) {
  currentAlbumIndex = index;
  currentTrackIndex = 0;
  const album = albums[index];
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  tracklist.innerHTML = "";

  album.tracks.forEach((track, i) => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `<span>${(i + 1).toString().padStart(2, '0')}. ${track.title}</span><span>${track.length}</span>`;
    div.addEventListener("click", () => {
      currentTrackIndex = i;
      playTrack(i);
    });
    tracklist.appendChild(div);
  });
}

function updatePlayPauseIcon() {
  playPauseBtn.innerHTML = audio.paused
    ? `<svg viewBox="0 0 60 60" width="24" height="24"><polygon points="15,10 50,30 15,50" fill="white"/></svg>`
    : `<svg viewBox="0 0 60 60" width="24" height="24"><rect x="15" y="10" width="8" height="40" fill="white"/><rect x="35" y="10" width="8" height="40" fill="white"/></svg>`;
}

function playTrack(index) {
  const track = albums[currentAlbumIndex].tracks[index];
  audio.src = track.url;
  audio.play();
  updatePlayPauseIcon();
}

playPauseBtn.addEventListener("click", () => {
  if (!audio.src) {
    playTrack(currentTrackIndex);
  } else if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseIcon();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % albums[currentAlbumIndex].tracks.length;
  playTrack(currentTrackIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + albums[currentAlbumIndex].tracks.length) % albums[currentAlbumIndex].tracks.length;
  playTrack(currentTrackIndex);
});

document.getElementById("albumToggleBtn").addEventListener("click", () => {
  currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
  loadAlbum(currentAlbumIndex);
  playTrack(currentTrackIndex);
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  progressBar.max = audio.duration || 0;
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

document.getElementById("minimizeBtn").addEventListener("click", () => {
  audioPlayer.classList.add("hidden");
  document.getElementById("maximizeBtn").classList.remove("hidden");
});

document.getElementById("maximizeBtn").addEventListener("click", () => {
  audioPlayer.classList.remove("hidden");
  document.getElementById("maximizeBtn").classList.add("hidden");
});
