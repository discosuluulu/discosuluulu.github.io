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
    { title: "Que Gata", length: "2:45", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3" },
    { title: "Mi Amor", length: "2:48", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3" },
    { title: "Forget the rest", length: "3:10", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2003%20Forget%20the%20rest.mp3" },
    { title: "Highlife", length: "2:50", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2004%20Highlife.mp3" },
    { title: "Voy Pal Agua", length: "3:00", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2005%20Voy%20Pal%20Agua.mp3" },
    { title: "Have ya had a Lemon", length: "3:03", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2006%20Have%20ya%20had%20a%20Lemon.mp3" },
    { title: "Move ya body", length: "3:15", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2007%20Move%20ya%20body.mp3" },
    { title: "Bom día", length: "2:59", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2008%20Bom%20día.mp3" },
    { title: "Ya", length: "3:30", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2009%20Ya.mp3" },
    { title: "Que disfrutes", length: "2:58", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2010%20Que%20disfrutes.mp3" },
  ]
};

let currentAlbum = gardenAlbum;
let currentTrackIndex = 0;
let audio = new Audio();

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const trackList = document.getElementById("trackList");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const nextAlbumBtn = document.getElementById("nextAlbumBtn");
const minimizeBtn = document.getElementById("minimizeBtn");
const maximizeBtn = document.getElementById("maximizeBtn");
const audioPlayer = document.getElementById("audioPlayer");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime");

// Explore Music button
document.getElementById("exploreButton").addEventListener("click", () => {
  document.getElementById("logo").style.transform = "scale(0.5) translate(-300px, -200px)";
  document.getElementById("exploreButton").style.display = "none";
  audioPlayer.classList.remove("hidden");
});

// Load album
function loadAlbum(album) {
  currentAlbum = album;
  currentTrackIndex = 0;
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = "";

  album.tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${index + 1}. ${track.title}</span><span>${track.length}</span>`;
    li.addEventListener("click", () => {
      currentTrackIndex = index;
      playCurrentTrack();
    });
    trackList.appendChild(li);
  });

  playCurrentTrack();
}

// Play current track
function playCurrentTrack() {
  audio.src = currentAlbum.tracks[currentTrackIndex].url;
  audio.play();
  updatePlayButton();
}

// Play/pause toggle
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayButton();
});

function updatePlayButton() {
  playPauseBtn.innerHTML = audio.paused ? "▶️" : "⏸️";
}

// Next/Prev
nextBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
  playCurrentTrack();
});

prevBtn.addEventListener("click", () => {
  currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  playCurrentTrack();
});

// Next Album
nextAlbumBtn.addEventListener("click", () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(currentAlbum);
});

// Progress Bar
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percent || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  totalTimeEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

// Minimize/Maximize
minimizeBtn.addEventListener("click", () => {
  audioPlayer.classList.add("hidden");
  maximizeBtn.classList.remove("hidden");
});

maximizeBtn.addEventListener("click", () => {
  audioPlayer.classList.remove("hidden");
  maximizeBtn.classList.add("hidden");
});

// Initialize
loadAlbum(currentAlbum);
