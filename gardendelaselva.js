// gardendelaselva.js

document.addEventListener("DOMContentLoaded", () => {
  const tracks = [
    { number: "01.", title: "Camino", duration: "1:22", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio/main/01_Camino.mp3" },
    { number: "02.", title: "Las Estaciones", duration: "1:42", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio/main/02_Las_Estaciones.mp3" },
    { number: "03.", title: "Sun Rain Song", duration: "2:13", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio/main/03_Sun_Rain_Song.mp3" },
    { number: "04.", title: "La Flor", duration: "2:02", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio/main/04_La_Flor.mp3" },
    { number: "05.", title: "Shaker Dub", duration: "1:58", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio/main/05_Shaker_Dub.mp3" }
  ];

  const player = document.createElement("div");
  player.className = "audio-player expanded";
  player.innerHTML = `
    <div class="player-header">
      <div class="album-title">
        <strong>Garden de La Selva</strong><br />
        <span class="subtitle">Shaped by shakers grown from okra harvests</span>
      </div>
      <div class="toggle-btn" id="minimizeToggle">−</div>
    </div>
    <div class="player-controls">
      <button id="playPauseBtn">
        <svg width="24" height="24" viewBox="0 0 24 24"><polygon class="play" points="6,4 20,12 6,20" fill="#fff"/><g class="pause" style="display:none"><rect x="6" y="4" width="4" height="16" fill="#fff"/><rect x="14" y="4" width="4" height="16" fill="#fff"/></g></svg>
      </button>
      <div class="progress-bar"><div class="progress"></div></div>
    </div>
    <ul class="tracklist">
      ${tracks.map((track, i) => `
        <li data-index="${i}">
          <span class="track-number">${track.number}</span>
          <span class="track-title">${track.title}</span>
          <span class="track-duration">${track.duration}</span>
        </li>`).join("")}
    </ul>
  `;
  document.body.appendChild(player);

  const audio = new Audio();
  let currentIndex = 0;
  let isPlaying = false;

  const playPauseBtn = document.getElementById("playPauseBtn");
  const toggleBtn = document.getElementById("minimizeToggle");
  const progressBar = player.querySelector(".progress");
  const trackItems = document.querySelectorAll(".tracklist li");

  function updateProgress() {
    if (audio.duration) {
      progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    }
  }

  function switchIcon() {
    const playIcon = playPauseBtn.querySelector(".play");
    const pauseIcon = playPauseBtn.querySelector(".pause");
    if (isPlaying) {
      playIcon.style.display = "none";
      pauseIcon.style.display = "block";
    } else {
      playIcon.style.display = "block";
      pauseIcon.style.display = "none";
    }
  }

  function loadTrack(index) {
    currentIndex = index;
    audio.src = tracks[index].url;
    audio.play();
    isPlaying = true;
    switchIcon();
    highlightTrack();
  }

  function highlightTrack() {
    trackItems.forEach((el, idx) => {
      el.classList.toggle("active", idx === currentIndex);
    });
  }

  playPauseBtn.addEventListener("click", () => {
    if (!isPlaying) {
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
    switchIcon();
  });

  trackItems.forEach((item) => {
    item.addEventListener("click", () => {
      const index = parseInt(item.dataset.index);
      loadTrack(index);
    });
  });

  toggleBtn.addEventListener("click", () => {
    player.classList.toggle("expanded");
    player.classList.toggle("minimized");
    toggleBtn.textContent = player.classList.contains("expanded") ? "−" : "+";
  });

  audio.addEventListener("ended", () => {
    if (currentIndex + 1 < tracks.length) {
      loadTrack(currentIndex + 1);
    } else {
      isPlaying = false;
      switchIcon();
    }
  });

  audio.addEventListener("timeupdate", updateProgress);
  loadTrack(0); // autoplay first track
});
