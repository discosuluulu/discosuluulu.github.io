document.getElementById("explore-btn").addEventListener("click", () => {
  document.getElementById("audio-players").style.display = "block";
  document.getElementById("landing-content").style.display = "none";

  // Optional: autoplay Garden de La Selva
  const gardenAudio = document.getElementById("garden-audio");
  if (gardenAudio) gardenAudio.play();
});

document.getElementById("info-btn").addEventListener("click", () => {
  window.location.href = "https://info.discosuluulu.com";
});
