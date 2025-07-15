const gardenAlbum = {
  title: "Garden de La Selva",
  subtitle: "Shaped by shakers grown from okra harvests",
  tracks: [
    {
      title: "Rubba Dubba",
      length: "3:12",
      url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3"
    }
  ]
};

const exploreBtn = document.getElementById("exploreBtn");
const audioPlayer = document.getElementById("audioPlayer");
const albumTitle = document.getElementById("albumTitle");
const albumSubtitle = document.getElementById("albumSubtitle");
const tracklist = document.getElementById("tracklist");
const playPauseBtn = document.getElementById("playPauseBtn");

const audio = new Audio(gardenAlbum.tracks[0].url);

exploreBtn.addEventListener("click", () => {
  audioPlayer.classList.remove("hidden");
  exploreBtn.style.display = "none";
  albumTitle.textContent = gardenAlbum.title;
  albumSubtitle.textContent = gardenAlbum.subtitle;

  const track = gardenAlbum.tracks[0];
  const div = document.createElement("div");
  div.textContent = `${track.title} (${track.length})`;
  tracklist.appendChild(div);
});

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
});
