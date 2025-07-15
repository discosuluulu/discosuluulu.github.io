const tracks = [
  // Garden de La Selva
  { title: "Rubba Dubba", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3", length: "3:12" },
  { title: "Blue", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2002%20Blue.mp3", length: "2:57" },
  { title: "Jam 3", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2003%20Jam%203.mp3", length: "3:44" },
  { title: "Groove 1", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2004%20Groove%201.mp3", length: "2:46" },
  { title: "Vamos Limón", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2005%20Vamos%20Limón.mp3", length: "3:25" },
  { title: "Mi Ritmo", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2006%20Mi%20Ritmo.mp3", length: "3:08" },
  { title: "Valle Azul", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2007%20Valle%20Azul.mp3", length: "4:01" },
  { title: "Yellow", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2008%20Yellow.mp3", length: "2:59" },
  { title: "Manzanillo", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2009%20Manzanillo.mp3", length: "3:17" },
  { title: "Dear Familia", url:"https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2010%20Dear%20Familia.mp3", length: "3:40" },
  { title: "Shake It", url:"https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2011%20Shake%20It.mp3", length: "3:20" },
];

const audio = document.getElementById("audio");
const tracklistEl = document.getElementById("tracklist");
const playBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressBar = document.getElementById("progress");

let currentTrack = 0;
let isPlaying = false;

// Populate tracklist
tracks.forEach((track, index) => {
  const trackEl = document.createElement("div");
  trackEl.textContent = `${(index + 1).toString().padStart(2, "0")}. ${track.title} – ${track.length}`;
  trackEl.addEventListener("click", () => {
    currentTrack = index;
    playCurrentTrack();
  });
  tracklistEl.appendChild(trackEl);
});

function playCurrentTrack() {
  audio.src = tracks[currentTrack].url;
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶️";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  playCurrentTrack();
});

prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  playCurrentTrack();
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percent + "%";
});

// Explore Music triggers
document.getElementById("explore-btn").addEventListener("click", () => {
  document.querySelector(".landing").classList.add("hidden");
  document.getElementById("audio-player").classList.remove("hidden");
  playCurrentTrack(); // autoplay
});
