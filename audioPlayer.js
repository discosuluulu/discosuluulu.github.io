const gardenAlbum = {
  title: "Garden de La Selva",
  subtitle: "Shaped by shakers grown from okra harvests",
  tracks: [
    { title: "Rubba Dubba", length: "3:12", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3" },
    { title: "Blue", length: "2:57", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2002%20Blue.mp3" },
    { title: "Jam 3", length: "3:44", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2003%20Jam%203.mp3" },
    { title: "Groove 1", length: "2:46", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2004%20Groove%201.mp3" },
    { title: "Vamos Limón", length: "3:25", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2005%20Vamos%20Limón.mp3" },
    { title: "Mi Ritmo", length: "3:08", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2006%20Mi%20Ritmo.mp3" },
    { title: "Valle Azul", length: "4:01", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2007%20Valle%20Azul.mp3" },
    { title: "Yellow", length: "2:59", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2008%20Yellow.mp3" },
    { title: "Manzanillo", length: "3:17", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2009%20Manzanillo.mp3" },
    { title: "Dear Familia", length: "3:40", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2010%20Dear%20Familia.mp3" },
    { title: "Shake It", length: "3:20", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2011%20Shake%20It.mp3" },
  ]
};

const otucanAlbum = {
  title: "O tú can",
  subtitle: "Recorded with one microphone in a palm frond wall rancho",
  tracks: [
    { title: "Que Gata", length: "2:45", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3" },
    { title: "Mi Amor", length: "2:48", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3" },
    { title: "Forget the rest", length: "3:10", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2003%20Forget%20the%20rest.mp3" },
    { title: "Highlife", length: "2:50", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2004%20Highlife.mp3" },
    { title: "Voy Pal Agua", length: "3:00", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2005%20Voy%20Pal%20Agua.mp3" },
    { title: "Have ya had a Lemon", length: "3:03", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2006%20Have%20ya%20had%20a%20Lemon.mp3" },
    { title: "Move ya body", length: "3:15", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2007%20Move%20ya%20body.mp3" },
    { title: "Bom día", length: "2:59", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2008%20Bom%20día.mp3" },
    { title: "Ya", length: "3:30", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2009%20Ya.mp3" },
    { title: "Que disfrutes", length: "2:58", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2010%20Que%20disfrutes.mp3" },
  ]
};

let albums = [gardenAlbum, otucanAlbum];
let currentAlbumIndex = 0;
let currentTrackIndex = 0;
let audio = new Audio();

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const tracklist = document.getElementById("tracklist");
const playPauseBtn = document.getElementById("playPauseBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const infoLink = document.getElementById("infoLink");
const minimizeBtn = document.getElementById("minimizeBtn");
const maximizeBtn = document.getElementById("maximizeBtn");
const player = document.getElementById("player");

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
    div.innerHTML = `<span class="track-title">${(i + 1).toString().padStart(2, '0')}. ${track.title}</span><span class="track-length">${track.length}</span>`;
    div.addEventListener("click", () => {
      currentTrackIndex = i;
      playTrack(i);
    });
    tracklist.appendChild(div);
  });
}

function updatePlayPauseIcon() {
  playPauseBtn.innerHTML = audio.paused
    ? `<svg viewBox="0 0 60 60" width="30" height="30"><polygon points="15,10 50,30 15,50" fill="black"/></svg>`
    : `<svg viewBox="0 0 60 60" width="30" height="30"><rect x="15" y="10" width="8" height="40" fill="black"/><rect x="35" y="10" width="8" height="40" fill="black"/></svg>`;
}

function playTrack(index) {
  const track = albums[currentAlbumIndex].tracks[index];
  audio.src = track.url;
  audio.play();
  updatePlayPauseIcon();
}

playPauseBtn.addEventListener("click", () => {
  if (audio.src === "") {
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

  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
  currentTimeDisplay.textContent = `${minutes}:${seconds}`;

  const durMin = Math.floor((audio.duration || 0) / 60);
  const durSec = Math.floor((audio.duration || 0) % 60).toString().padStart(2, '0');
  durationDisplay.textContent = `${durMin}:${durSec}`;
});

audio.addEventListener("ended", () => {
  currentTrackIndex = (currentTrackIndex + 1) % albums[currentAlbumIndex].tracks.length;
  playTrack(currentTrackIndex);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

// Minimize/maximize player
minimizeBtn.addEventListener("click", () => {
  player.classList.add("minimized");
  infoLink.style.display = "none";
});

maximizeBtn.addEventListener("click", () => {
  player.classList.remove("minimized");
  infoLink.style.display = "block";
});

// Initialize
loadAlbum(currentAlbumIndex);
updatePlayPauseIcon();
