document.getElementById("explore-btn").addEventListener("click", () => {
  document.getElementById("landing").style.display = "none";
  document.getElementById("audio-player-container").classList.remove("hidden");
  document.getElementById("info-btn").classList.remove("hidden");
  playAudio();
});
