const gardenTracks = [
  { title: "Rubba Dubba", length: "3:12", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3" },
  { title: "Blue", length: "2:57", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2002%20Blue.mp3" },
  { title: "Jam 3", length: "3:44", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2003%20Jam%203.mp3" },
  { title: "Groove 1", length: "2:46", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2004%20Groove%201.mp3" },
  { title: "Vamos Limón", length: "3:25", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2005%20Vamos%20Limón.mp3" },
  { title: "Mi Ritmo", length: "3:08", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2006%20Mi%20Ritmo.mp3" },
  { title: "Valle Azul", length: "4:01", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2007%20Valle%20Azul.mp3" },
  { title: "Yellow", length: "2:59", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2008%20Yellow.mp3" },
  { title: "Manzanillo", length: "3:17", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2009%20Manzanillo.mp3" },
  { title: "Dear Familia", length: "3:40", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2010%20Dear%20Familia.mp3" },
  { title: "Shake It", length: "3:20", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2011%20Shake%20It.mp3" }
];

const otucanTracks = [
  { title: "Que Gata", length: "2:58", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3" },
  { title: "Mi Amor", length: "3:01", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3" },
  { title: "Forget the rest", length: "3:22", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2003%20Forget%20the%20rest.mp3" },
  { title: "Highlife", length: "3:14", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2004%20Highlife.mp3" },
  { title: "Voy Pal Agua", length: "3:05", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2005%20Voy%20Pal%20Agua.mp3" },
  { title: "Have ya had a Lemon", length: "3:26", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2006%20Have%20ya%20had%20a%20Lemon.mp3" },
  { title: "Move ya body", length: "3:17", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2007%20Move%20ya%20body.mp3" },
  { title: "Bom día", length: "3:00", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2008%20Bom%20día.mp3" },
  { title: "Ya", length: "2:53", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2009%20Ya.mp3" },
  { title: "Que disfrutes", length: "3:11", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2010%20Que%20disfrutes.mp3" }
];

function renderTracks(audioId, ulId, tracks) {
  const audio = document.getElementById(audioId);
  const ul = document.getElementById(ulId);

  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.innerText = `${String(index + 1).padStart(2, '0')}. ${track.title} – ${track.length}`;
    li.addEventListener('click', () => {
      audio.src = track.url;
      audio.play();
    });
    ul.appendChild(li);
  });
}

window.onload = () => {
  renderTracks("garden-audio", "garden-tracks", gardenTracks);
  renderTracks("otucan-audio", "otucan-tracks", otucanTracks);
};
