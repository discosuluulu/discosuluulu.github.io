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
const audio = new Audio();

const albumTitle = document.getElementById("album-title");
const albumSubtitle = document.getElementById("album-subtitle");
const trackList = document.getElementById("track-list");
const playBtn = document.getElementById("play");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("time-display");

document.getElementById("toggle-album").onclick = () => {
  currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
  currentTrackIndex = 0;
  loadAlbum();
};

document.getElementById("minimize").onclick = () => {
  document.getElementById("player").style.display = "none";
  document.getElementById("maximize").style.display = "block";
};

document.getElementById("maximize").onclick = () => {
  document.getElementById("player").style.display = "block";
  document.getElementById("maximize").style.display = "none";
};

playBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

audio.onplay = () => {
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline";
};

audio.onpause = () => {
  playIcon.style.display = "inline";
  pauseIcon.style.display = "none";
};

audio.ontimeupdate = () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;
  timeDisplay.textContent = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
};

progress.oninput = () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
};

prevBtn.onclick = () => {
  if (currentTrackIndex > 0) {
    currentTrackIndex--;
    playTrack();
  }
};

nextBtn.onclick = () => {
  if (currentTrackIndex < currentAlbum.tracks.length - 1) {
    currentTrackIndex++;
    playTrack();
  }
};

function loadAlbum() {
  albumTitle.textContent = currentAlbum.title;
  albumSubtitle.textContent = currentAlbum.subtitle;
  trackList.innerHTML = "";
  currentAlbum.tracks.forEach((track, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${track.title}`;
    const span = document.createElement("span");
    span.textContent = track.length;
    li.appendChild(span);
    li.onclick = () => {
      currentTrackIndex = i;
      playTrack();
    };
    trackList.appendChild(li);
  });
  playTrack();
}

function playTrack() {
  const allTracks = trackList.querySelectorAll("li");
  allTracks.forEach(t => t.classList.remove("active"));
  if (allTracks[currentTrackIndex]) {
    allTracks[currentTrackIndex].classList.add("active");
  }
  audio.src = currentAlbum.tracks[currentTrackIndex].url;
  audio.play();
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60) || 0;
  const sec = Math.floor(seconds % 60) || 0;
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

loadAlbum();
