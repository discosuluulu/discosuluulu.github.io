const albums = [
  {
    title: "Garden de La Selva",
    subtitle: "Shaped by shakers grown from okra harvests",
    tracks: [
      { title: "1. Son del Mercado", url: "https://raw.githubusercontent.com/discosuluulu/garden-audio/main/01%20Son%20del%20Mercado.mp3", duration: "2:41" },
      { title: "2. Lluvia", url: "https://raw.githubusercontent.com/discosuluulu/garden-audio/main/02%20Lluvia.mp3", duration: "3:00" },
      { title: "3. Cosas Naturales", url: "https://raw.githubusercontent.com/discosuluulu/garden-audio/main/03%20Cosas%20Naturales.mp3", duration: "2:48" },
      { title: "4. Danzón de la Selva", url: "https://raw.githubusercontent.com/discosuluulu/garden-audio/main/04%20Danzon%20de%20la%20Selva.mp3", duration: "2:37" },
    ]
  },
  {
    title: "O tú can",
    subtitle: "Recorded with one microphone in a palm frond wall rancho",
    tracks: [
      { title: "1. Que Gata", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3", duration: "2:32" },
      { title: "2. Mi Amor", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3", duration: "2:28" },
      { title: "3. Forget the rest", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2003%20Forget%20the%20rest.mp3", duration: "3:10" },
      { title: "4. Highlife", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/main/Discos%20Uluulu%20-%2004%20Highlife.mp3", duration: "2:50" },
    ]
  }
];

let currentAlbumIndex = 0;
let currentTrackIndex = 0;
let audio = new Audio();
let isPlaying = false;
let progressInterval;

function loadAlbum(index) {
  const album = albums[index];
  document.getElementById("album-title").textContent = album.title;
  document.getElementById("album-subtitle").textContent = album.subtitle;

  const tracklist = document.getElementById("tracklist");
  tracklist.innerHTML = "";
  album.tracks.forEach((track, i) => {
    const li = document.createElement("li");
    li.textContent = `${track.title} (${track.duration})`;
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
  highlightTrack();
}

function highlightTrack() {
  const items = document.querySelectorAll("#tracklist li");
  items.forEach((item, i) => {
    item.classList.toggle("active", i === currentTrackIndex);
  });
}

function playAudio() {
  audio.play();
  isPlaying = true;
  document.getElementById("play-pause").textContent = "⏸";

  progressInterval = setInterval(updateProgress, 500);
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  document.getElementById("play-pause").textContent = "▶";
  clearInterval(progressInterval);
}

function togglePlayPause() {
  isPlaying ? pauseAudio() : playAudio();
}

function nextTrack() {
  const album = albums[currentAlbumIndex];
  currentTrackIndex = (currentTrackIndex + 1) % album.tracks.length;
  loadTrack();
  playAudio();
}

function prevTrack() {
  const album = albums[currentAlbumIndex];
  currentTrackIndex = (currentTrackIndex - 1 + album.tracks.length) % album.tracks.length;
  loadTrack();
  playAudio();
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("timestamp").textContent = formatTime(audio.currentTime);
}

function formatTime(sec) {
  const min = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${min}:${s}`;
}

document.getElementById("play-pause").addEventListener("click", togglePlayPause);
document.getElementById("next-track").addEventListener("click", nextTrack);
document.getElementById("prev-track").addEventListener("click", prevTrack);
document.getElementById("next-album").addEventListener("click", () => {
  currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
  currentTrackIndex = 0;
  loadAlbum(currentAlbumIndex);
  playAudio();
});

audio.addEventListener("ended", nextTrack);

loadAlbum(currentAlbumIndex);
