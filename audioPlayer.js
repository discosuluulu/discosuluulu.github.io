function initializePlayer() {
  const container = document.getElementById('audioPlayerContainer');
  container.innerHTML = ''; // Clear previous if needed

  const albums = [
    {
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
    {
      title: "O tú can",
      subtitle: "Recorded with one microphone in a palm frond wall rancho",
      tracks: [
        { title: "Que Gata", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2001%20Que%20Gata.mp3", length: "2:34" },
        { title: "Mi Amor", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2002%20Mi%20Amor.mp3", length: "2:48" },
        { title: "Forget the rest", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2003%20Forget%20the%20rest.mp3", length: "3:05" },
        { title: "Highlife", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2004%20Highlife.mp3", length: "3:12" },
        { title: "Voy Pal Agua", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2005%20Voy%20Pal%20Agua.mp3", length: "2:50" },
        { title: "Have ya had a Lemon", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2006%20Have%20ya%20had%20a%20Lemon.mp3", length: "3:01" },
        { title: "Move ya body", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2007%20Move%20ya%20body.mp3", length: "2:58" },
        { title: "Bom día", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2008%20Bom%20día.mp3", length: "2:36" },
        { title: "Ya", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2009%20Ya.mp3", length: "2:42" },
        { title: "Que disfrutes", url: "https://raw.githubusercontent.com/discosuluulu/Otucan/refs/heads/main/Discos%20Uluulu%20-%2010%20Que%20disfrutes.mp3", length: "3:10" },
      ]
    }
  ];

  // You can now dynamically render the UI here using albums[]
  // For now just autoplay the first track of first album
  const audio = new Audio(albums[0].tracks[0].url);
  audio.autoplay = true;
  audio.controls = true;
  container.appendChild(audio);
}
