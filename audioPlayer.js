const tracks = [
  {
    album: "Garden de La Selva",
    title: "Track 1",
    duration: "2:34",
    url: "https://raw.githubusercontent.com/discosuluulu/GardenAudio/main/Track1.mp3"
  },
  {
    album: "O tú can",
    title: "Que Gata",
    duration: "2:45",
    url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3"
  },
  {
    album: "O tú can",
    title: "Mi Amor",
    duration: "3:01",
    url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3"
  },
  // Add more O tú can and Garden de La Selva tracks here...
];

let currentTrack = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-pause");
const progress = document.getElementById("progress");
const timeDisplay = document.getElementById("track-time");
const tracklistDiv = document.getElementById("tracklist");

function loadTrack(index) {
  currentTrack = index;
  audio.src = tracks[index].url;
  updateTracklistUI();
}

function playCurrentTrack() {
  loadTrack(currentTrack);
  audio.play();
  playBtn.innerHTML = "❚❚";
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "❚❚";
  } else {
    audio.pause();
    playBtn.innerHTML = "►";
  }
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
  timeDisplay.textContent = formatTime(audio.currentTime) + " / " + formatTime(audio.duration);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateTracklistUI() {
  tracklistDiv.innerHTML = "";
  tracks.forEach((track, i) => {
    const div = document.createElement("div");
    div.className = "track" + (i === currentTrack ? " active" : "");
    div.innerHTML = `<span>${track.title}</span><span>${track.duration}</span>`;
    div.onclick = () => {
      currentTrack = i;
      playCurrentTrack();
    };
    tracklistDiv.appendChild(div);
  });
}

// Event Listeners
playBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  playCurrentTrack();
});

document.getElementById("explore-btn").addEventListener("click", () => {
  document.querySelector(".landing").style.display = "none";
  document.getElementById("audio-player").style.display = "block";
  playCurrentTrack();
});

// Initial setup
updateTracklistUI();
