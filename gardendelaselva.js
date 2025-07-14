<div class="floating-player" id="audioPlayer">
<div class="player-header" onclick="togglePlayer()">
<span id="playerTitle">Garden de La Selva – Shaped by shakers grown from okra harvests</span>
<span id="toggleButton">−</span>
</div>
<div class="player-body">
<div class="centered-play-button">
<svg id="playIcon" viewBox="0 0 100 100" width="60" height="60" onclick="togglePlay()">
<circle cx="50" cy="50" r="45" fill="#fff" />
<polygon id="playTriangle" points="40,30 70,50 40,70" fill="#000" />
</svg>
</div>
<div class="progress-container">
<span id="currentTime">0:00</span>
<input type="range" id="progressBar" class="progress-bar" value="0" min="0" max="100" step="1">
<span id="duration">0:00</span>
</div>
<div class="tracklist" id="tracklist"></div>
</div>
</div>

<script>
const audioPlayer = document.getElementById('audioPlayer');
const toggleBtn = document.getElementById('toggleButton');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const tracklistEl = document.getElementById('tracklist');
const playIcon = document.getElementById('playIcon');

const tracks = [
{ title: "Rubba Dubba", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3", length: "3:12" },
{ title: "Blue", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2002%20Blue.mp3", length: "2:57" },
{ title: "Jam 3", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2003%20Jam%203.mp3", length: "3:44" },
{ title: "Groove 1", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2004%20Groove%201.mp3", length: "2:46" },
{ title: "Vamos Limón", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2005%20Vamos%20Limón.mp3", length: "3:25" },
{ title: "Mi Ritmo", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2006%20Mi%20Ritmo.mp3", length: "3:08" },
{ title: "Valle Azul", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2007%20Valle%20Azul.mp3", length: "4:01" },
{ title: "Yellow", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2008%20Yellow.mp3", length: "2:59" },
{ title: "Manzanillo", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2009%20Manzanillo.mp3", length: "3:17" },
{ title: "Dear Familia", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2010%20Dear%20Familia.mp3", length: "3:40" },
{ title: "Shake It", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2011%20Shake%20it.mp3", length: "3:20" }
];

let currentTrack = 0;
let isPlaying = false;
let currentTrackElement = null;
const audio = new Audio(tracks[currentTrack].url);

function togglePlayer() {
audioPlayer.classList.toggle('minimized');
toggleBtn.textContent = audioPlayer.classList.contains('minimized') ? '+' : '−';
}

function togglePlay() {
const svg = document.getElementById('playIcon');
const triangle = document.getElementById('playTriangle');
const pauseGroup = document.getElementById('pauseIcon');

if (isPlaying) {
audio.pause();
pauseGroup?.remove();
const play = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
play.setAttribute("id", "playTriangle");
play.setAttribute("points", "40,30 70,50 40,70");
play.setAttribute("fill", "#000");
svg.appendChild(play);
} else {
triangle?.remove();
const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
g.setAttribute("id", "pauseIcon");

const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect1.setAttribute("x", "38");
rect1.setAttribute("y", "30");
rect1.setAttribute("width", "8");
rect1.setAttribute("height", "40");
rect1.setAttribute("fill", "#000");

const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect2.setAttribute("x", "54");
rect2.setAttribute("y", "30");
rect2.setAttribute("width", "8");
rect2.setAttribute("height", "40");
rect2.setAttribute("fill", "#000");

g.appendChild(rect1);
g.appendChild(rect2);
svg.appendChild(g);

audio.play();
}

isPlaying = !isPlaying;
}

function playTrack(index) {
if (currentTrackElement) {
currentTrackElement.classList.remove('active-track');
}
currentTrack = index;
audio.src = tracks[index].url;
audio.play();
updatePlayIconToPause();
isPlaying = true;

currentTrackElement = trackElements[index];
currentTrackElement.classList.add('active-track');
}

function updatePlayIconToPause() {
const triangle = document.getElementById('playTriangle');
triangle?.remove();

const svg = document.getElementById('playIcon');
const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
g.setAttribute("id", "pauseIcon");

const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect1.setAttribute("x", "38");
rect1.setAttribute("y", "30");
rect1.setAttribute("width", "8");
rect1.setAttribute("height", "40");
rect1.setAttribute("fill", "#000");

const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect2.setAttribute("x", "54");
rect2.setAttribute("y", "30");
rect2.setAttribute("width", "8");
rect2.setAttribute("height", "40");
rect2.setAttribute("fill", "#000");

g.appendChild(rect1);
g.appendChild(rect2);
svg.appendChild(g);
}

audio.addEventListener('timeupdate', () => {
progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
currentTimeEl.textContent = formatTime(audio.currentTime);
durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener('input', () => {
audio.currentTime = (progressBar.value / 100) * audio.duration;
});

audio.addEventListener('ended', () => {
currentTrack = (currentTrack + 1) % tracks.length;
playTrack(currentTrack);
});

function formatTime(time) {
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60).toString().padStart(2, '0');
return `${minutes}:${seconds}`;
}

const trackElements = [];
tracks.forEach((track, i) => {
const trackEl = document.createElement('div');
trackEl.innerHTML = `${i + 1}. ${track.title}<span>${track.length}</span>`;
trackEl.onclick = () => playTrack(i);
tracklistEl.appendChild(trackEl);
trackElements.push(trackEl);
});
</script>

<style>
.floating-player {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
font-family: sans-serif;
font-size: 14px;
background: rgba(0, 0, 0, 0.7);
color: #fff;
z-index: 9999;
transition: all 0.3s ease;
text-align: center;
}

.floating-player.minimized {
height: 36px;
background: #e8e1d0;
color: #000;
}

.floating-player.minimized .player-body {
display: none;
}

.player-header {
display: flex;
justify-content: space-between;
align-items: center;
padding: 6px 16px;
cursor: pointer;
font-weight: bold;
font-size: 14px;
}

#playerTitle {
flex: 1;
text-align: center;
font-size: 14px;
}

.player-body {
padding: 12px 16px;
background: transparent;
}

.centered-play-button {
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 12px;
}

.progress-container {
display: flex;
align-items: center;
gap: 8px;
margin-bottom: 16px;
color: #ccc;
font-size: 12px;
}

.progress-bar {
flex: 1;
-webkit-appearance: none;
height: 4px;
background: #888;
border-radius: 2px;
outline: none;
cursor: pointer;
}

.progress-bar::-webkit-slider-thumb {
-webkit-appearance: none;
width: 10px;
height: 10px;
background: #fff;
border-radius: 50%;
margin-top: -3px;
}

.progress-bar::-moz-range-thumb {
width: 10px;
height: 10px;
background: #fff;
border-radius: 50%;
cursor: pointer;
}

.tracklist {
max-height: 110px;
overflow-y: auto;
padding-right: 4px;
}

.tracklist::-webkit-scrollbar {
width: 6px;
}

.tracklist::-webkit-scrollbar-thumb {
background-color: rgba(255, 255, 255, 0.3);
border-radius: 4px;
}

.tracklist div {
margin: 4px 0;
padding-bottom: 4px;
border-bottom: 1px solid rgba(255,255,255,0.1);
display: flex;
justify-content: space-between;
cursor: pointer;
}

.tracklist div:hover {
color: #e2e2e2;
}

.active-track {
color: #fff;
font-weight: bold;
background-color: rgba(255, 255, 255, 0.1);
border-radius: 4px;
padding: 2px 4px;
}
</style>
