const exploreBtn = document.getElementById("exploreBtn");
const landing = document.getElementById("landing");
const audioPlayerContainer = document.getElementById("audioPlayerContainer");
const infoBtn = document.getElementById("infoBtn");
const minimizeBtn = document.getElementById("minimizeBtn");

exploreBtn.addEventListener("click", () => {
  landing.style.display = "none";
  audioPlayerContainer.classList.remove("hidden");
  infoBtn.style.display = "block";
  loadAlbum(0); // Garden de La Selva
  playTrack(currentTrackIndex);
});

minimizeBtn.addEventListener("click", () => {
  const isHidden = audioPlayerContainer.classList.toggle("hidden");
  infoBtn.style.display = isHidden ? "none" : "block";
});
