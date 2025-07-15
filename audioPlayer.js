document.getElementById("explore-btn").addEventListener("click", () => {
  document.querySelector(".landing").style.display = "none";
  document.getElementById("audio-player-container").classList.remove("hidden");
  playTrack("garden", 0);
});

const players = {
  garden: {
    audio: document.getElementById("garden-audio"),
    tracks: [
      { title: "Rubba Dubba", url: "https://...", duration: "3:12" },
      // ... other Garden tracks
    ],
    current: 0,
    elements: {
      list: document.getElementById("garden-tracklist"),
      playBtn: document.getElementById("garden-play-pause"),
      playIcon: document.getElementById("garden-play-icon"),
      pauseIcon: document.getElementById("garden-pause-icon"),
      progress: document.getElementById("garden-progress"),
      prev: document.getElementById("garden-prev"),
      next: document.getElementById("garden-next")
    }
  },
  otucan: {
    audio: document.getElementById("otucan-audio"),
    tracks: [
      { title: "Que Gata", url: "https://...", duration: "2:55" },
      // ... other O tú can tracks
    ],
    current: 0,
    elements: {
      list: document.getElementById("otucan-tracklist"),
      playBtn: document.getElementById("otucan-play-pause"),
      playIcon: document.getElementById("otucan-play-icon"),
      pauseIcon: document.getElementById("otucan-pause-icon"),
      progress: document.getElementById("otucan-progress"),
      prev: document.getElementById("otucan-prev"),
      next: document.getElementById("otucan-next")
    }
  }
};

// Build tracklists
Object.entries(players).forEach(([key, player]) => {
  player.tracks.forEach((track, index) => {
    const el = document.createElement("div");
    el.textContent = `${(index + 1).toString().padStart(2, "0")}. ${track.title} – ${track.duration}`;
    el.onclick = () => playTrack(key, index);
    player.elements.list.appendChild(el);
  });

  const audio = player.audio;

  player.elements.playBtn.onclick = () => togglePlay(key);
  player.elements.prev.onclick = () => playTrack(key, (player.current - 1 + player.tracks.length) % player.tracks.length);
  player.elements.next.onclick = () => playTrack(key, (player.current + 1) % player.tracks.length);

  audio.ontimeupdate = () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    player.elements.progress.style.width = percent + "%";
  };
});

function playTrack(playerKey, index) {
  const player = players[playerKey];
  player.current = index;
  player.audio.src = player.tracks[index].url;
  player.audio.play();
  player.elements.playIcon.style.display = "none";
  player.elements.pauseIcon.style.display = "inline";
}

function togglePlay(playerKey) {
  const player = players[playerKey];
  if (player.audio.paused) {
    player.audio.play();
    player.elements.playIcon.style.display = "none";
    player.elements.pauseIcon.style.display = "inline";
  } else {
    player.audio.pause();
    player.elements.playIcon.style.display = "inline";
    player.elements.pauseIcon.style.display = "none";
  }
}
