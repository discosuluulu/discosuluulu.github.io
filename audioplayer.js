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
let currentTrackIndex = 0;
const audio = document.getElementById("audio");
const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const trackList = document.getElementById("trackList");
const progressBar = document.getElementById("progressBar");
const currentTimeSpan = document.getElementById("currentTime");
const durationSpan = document.getElementById("duration");

function loadAlbum(album) {
  albumTitle.textContent = album.title;
  albumSubtitle.textContent = album.subtitle;
  trackList.innerHTML = "";

  album.tracks.forEach((track, index) => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `<span>${index + 1}. ${track.title}</span><span>${track.length}</span>`;
    div.addEventListener("click", () => playTrack(index));
    trackList.appendChild(div);
  });

  playTrack(0);
}

function playTrack(index) {
  const prev = document.querySelector(".track.active");
  if (prev) prev.classList.remove("active");

  currentTrackIndex = index;
  const track = currentAlbum.tracks[index];
  audio.src = track.url;
  audio.play();

  trackList.children[index].classList.add("active");
  updatePlayPauseIcons();
}

function updatePlayPauseIcons() {
  document.getElementById("playIcon").style.display = audio.paused ? "inline" : "none";
  document.getElementById("pauseIcon").style.display = audio.paused ? "none" : "inline";
}

document.getElementById("playPauseBtn").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updatePlayPauseIcons();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  playTrack((currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  playTrack((currentTrackIndex + 1) % currentAlbum.tracks.length);
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percent || 0;
  currentTimeSpan.textContent = formatTime(audio.currentTime);
  durationSpan.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

document.getElementById("toggleAlbumBtn").addEventListener("click", () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  loadAlbum(currentAlbum);
});

document.getElementById("minimizeBtn").addEventListener("click", () => {
  document.getElementById("audioPlayer").classList.add("minimized");
  document.getElementById("maximizeBtn").style.display = "block";
});

document.getElementById("maximizeBtn").addEventListener("click", () => {
  document.getElementById("audioPlayer").classList.remove("minimized");
  document.getElementById("maximizeBtn").style.display = "none";
});

loadAlbum(currentAlbum);
