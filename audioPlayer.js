document.addEventListener("DOMContentLoaded", () => {
  const albums = {
    garden: {
      title: "Garden de La Selva",
      subtitle: "Shaped by shakers grown from okra harvests",
      tracks: [
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
        { title: "Shake It", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2011%20Shake%20It.mp3", length: "3:20" },
      ]
    },
    otucan: {
      title: "O tú can",
      subtitle: "Recorded with one microphone in a palm frond wall rancho",
      tracks: [
        { title: "Que Gata", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3", length: "3:04" },
        { title: "Mi Amor", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3", length: "2:58" },
        { title: "Forget the rest", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2003%20Forget%20the%20rest.mp3", length: "3:01" },
        { title: "Highlife", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2004%20Highlife.mp3", length: "3:16" },
        { title: "Voy Pal Agua", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2005%20Voy%20Pal%20Agua.mp3", length: "2:54" },
        { title: "Have ya had a Lemon", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2006%20Have%20ya%20had%20a%20Lemon.mp3", length: "3:11" },
        { title: "Move ya body", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2007%20Move%20ya%20body.mp3", length: "2:42" },
        { title: "Bom día", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2008%20Bom%20día.mp3", length: "2:50" },
        { title: "Ya", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2009%20Ya.mp3", length: "3:15" },
        { title: "Que disfrutes", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2010%20Que%20disfrutes.mp3", length: "3:33" },
      ]
    }
  };

  let currentAlbumKey = "garden";
  let currentTrackIndex = 0;
  const audio = new Audio();
  const player = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const progress = document.getElementById("progress");
  const tracklist = document.getElementById("tracklist");
  const titleElem = document.getElementById("player-title");
  const subtitleElem = document.getElementById("player-subtitle");
  const minimizeBtn = document.getElementById("minimize-btn");
  const maximizeBtn = document.getElementById("maximize-btn");
  const minimizedBar = document.getElementById("minimized-bar");
  const switchBtn = document.getElementById("switch-album-btn");

  function loadAlbum(key) {
    currentAlbumKey = key;
    currentTrackIndex = 0;
    const album = albums[key];
    titleElem.textContent = album.title;
    subtitleElem.textContent = album.subtitle;
    tracklist.innerHTML = "";
    album.tracks.forEach((track, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${String(i + 1).padStart(2, '0')}.</span> ${track.title} <span class="length">${track.length}</span>`;
      li.addEventListener("click", () => playTrack(i));
      tracklist.appendChild(li);
    });
    playTrack(0);
  }

  function playTrack(index) {
    const album = albums[currentAlbumKey];
    currentTrackIndex = index;
    audio.src = album.tracks[index].url;
    audio.play();
    updateTracklistHighlight();
  }

  function updateTracklistHighlight() {
    const items = tracklist.querySelectorAll("li");
    items.forEach((item, i) => {
      item.classList.toggle("active", i === currentTrackIndex);
    });
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function updateProgress() {
    const value = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${value}%`;
  }

  function playNext() {
    const album = albums[currentAlbumKey];
    currentTrackIndex = (currentTrackIndex + 1) % album.tracks.length;
    playTrack(currentTrackIndex);
  }

  playBtn.addEventListener("click", togglePlay);
  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("ended", playNext);

  minimizeBtn.addEventListener("click", () => {
    player.classList.add("minimized");
    minimizedBar.style.display = "flex";
  });

  maximizeBtn.addEventListener("click", () => {
    player.classList.remove("minimized");
    minimizedBar.style.display = "none";
  });

  switchBtn.addEventListener("click", () => {
    const next = currentAlbumKey === "garden" ? "otucan" : "garden";
    loadAlbum(next);
  });

  // Auto-start first album when explore button is clicked
  const exploreBtn = document.getElementById("explore-btn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      document.getElementById("audio-player").style.display = "block";
      loadAlbum("garden");
    });
  }

  // Load first album by default if you want autoplay on page load
  // loadAlbum("garden");
});
