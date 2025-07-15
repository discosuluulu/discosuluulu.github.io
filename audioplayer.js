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

let currentAlbum = gardenAlbum;
let currentTrack = 0;
const audio = new Audio();

const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const trackList = document.getElementById("trackList");
const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

function loadAlbum(album) {
  currentAlbum = album;
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = "";
  album.tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${track.title}`;
    const time = document.createElement("span");
    time.textContent = track.length;
    li.appendChild(time);
    li.onclick = () => {
      currentTrack = index;
      loadTrack();
      playAudio();
    };
    trackList.appendChild(li);
  });
  highlightTrack();
  loadTrack();
}

function loadTrack() {
  const track = currentAlbum.tracks[currentTrack];
  audio.src = track.url;
  highlightTrack();
}

function playAudio() {
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

function pauseAudio() {
  audio.pause();
  playPauseBtn.textContent = "▶️";
}

function highlightTrack() {
  const items = trackList.querySelectorAll("li");
  items.forEach((item, i) => {
    item.classList.toggle("active", i === currentTrack);
  });
}

playPauseBtn.onclick = () => {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
};

prevBtn.onclick = () => {
  currentTrack = (currentTrack - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
  loadTrack();
  playAudio();
};

nextBtn.onclick = () => {
  currentTrack = (currentTrack + 1) % currentAlbum.tracks.length;
  loadTrack();
  playAudio();
};

audio.addEventListener("timeupdate", () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(time) {
  const mins = Math.floor(time / 60) || 0;
  const secs = Math.floor(time % 60) || 0;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

document.getElementById("toggleAlbum").onclick = () => {
  const next = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(next);
};

document.getElementById("minimizeBtn").onclick = () => {
  document.getElementById("audioPlayer").classList.add("hidden");
  document.getElementById("maximizeBtn").classList.remove("hidden");
};

document.getElementById("maximizeBtn").onclick = () => {
  document.getElementById("audioPlayer").classList.remove("hidden");
  document.getElementById("maximizeBtn").classList.add("hidden");
};

loadAlbum(gardenAlbum);
