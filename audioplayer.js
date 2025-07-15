document.addEventListener('DOMContentLoaded', () => {
  const tracks = [
    { title: "Rubba Dubba", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2001%20Rubba%20Dubba.mp3", length: "3:12" },
    { title: "Blue",       url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2002%20Blue.mp3", length: "2:57" },
    { title: "Jam 3",      url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2003%20Jam%203.mp3", length: "3:44" },
    { title: "Groove 1",   url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2004%20Groove%201.mp3", length: "2:46" },
    { title: "Vamos Limón",url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2005%20Vamos%20Limón.mp3", length: "3:25" },
    { title: "Mi Ritmo",   url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2006%20Mi%20Ritmo.mp3", length: "3:08" },
    { title: "Valle Azul", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden%20de%20La%20Selva%20-%2007%20Valle%20Azul.mp3", length: "4:01" },
    { title: "Yellow",     url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden de La Selva%20-%2008%20Yellow.mp3", length: "2:59" },
    { title: "Manzanillo", url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden‑de‑La‑Selva%20-%2009%20Manzanillo.mp3", length: "3:17" },
    { title: "Dear Familia",url:"https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden‑de‑La‑Selva%20-%2010%20Dear%20Familia.mp3", length: "3:40" },
    { title: "Shake It",   url: "https://raw.githubusercontent.com/discosuluulu/Garden-de-La-Selva-audio-/main/Discos%20Uluulu%20-%20Garden‑de‑La‑Selva%20-%2011%20Shake%20It.mp3", length: "3:20" }
  ];

  // Create container
  const player = document.createElement('div');
  player.className = 'floating-player';
  player.id = 'audioPlayer';
  player.innerHTML = `
    <div class="player-header" onclick="togglePlayer()">
      <span id="playerTitle">Garden de La Selva – Shaped by shakers grown from okra harvests</span>
      <span id="toggleButton">−</span>
    </div>
    <div class="player-body">
      <div class="centered-play-button">
        <svg id="playIcon" viewBox="0 0 100 100" width="60" height="60" onclick="togglePlay()">
          <circle cx="50" cy="50" r="45" fill="#fff"/>
          <polygon id="playTriangle" points="40,30 70,50 40,70" fill="#000"/>
        </svg>
      </div>
      <div class="progress-container">
        <span id="currentTime">0:00</span>
        <input type="range" id="progressBar" class="progress-bar" value="0" min="0" max="100" step="1"/>
        <span id="duration">0:00</span>
      </div>
      <div class="tracklist" id="tracklist"></div>
    </div>
  `;
  document.body.appendChild(player);

  // State
  let currentTrack = 0;
  let isPlaying = false;
  const audio = new Audio(tracks[currentTrack].url);

  // Toggle player minimized
  window.togglePlayer = () => {
    player.classList.toggle('minimized');
    document.getElementById('toggleButton').textContent = player.classList.contains('minimized') ? '+' : '−';
  };

  // Play/pause toggle
  window.togglePlay = () => {
    const svg = document.getElementById('playIcon');
    if (isPlaying) {
      audio.pause();
      showPlayIcon();
    } else {
      audio.play().catch(()=>{});
      showPauseIcon();
    }
    isPlaying = !isPlaying;
  };

  function showPlayIcon() {
    const svg = document.getElementById('playIcon');
    svg.querySelectorAll('*').forEach(n=>n.remove());
    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx','50'); circle.setAttribute('cy','50');
    circle.setAttribute('r','45'); circle.setAttribute('fill','#fff');
    const poly = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    poly.setAttribute('id','playTriangle');
    poly.setAttribute('points','40,30 70,50 40,70');
    poly.setAttribute('fill','#000');
    svg.appendChild(circle); svg.appendChild(poly);
  }

  function showPauseIcon() {
    const svg = document.getElementById('playIcon');
    svg.querySelectorAll('*').forEach(n=>n.remove());
    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx','50'); circle.setAttribute('cy','50');
    circle.setAttribute('r','45'); circle.setAttribute('fill','#fff');
    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('id','pauseIcon');
    const r1 = document.createElementNS('http://www.w3.org/2000/svg','rect');
    r1.setAttribute('x','38');r1.setAttribute('y','30');
    r1.setAttribute('width','8');r1.setAttribute('height','40');r1.setAttribute('fill','#000');
    const r2 = r1.cloneNode();
    r2.setAttribute('x','54');
    g.appendChild(r1); g.appendChild(r2);
    svg.appendChild(circle); svg.appendChild(g);
  }

  function formatTime(t){
    if(isNaN(t)) return '0:00';
    const m=Math.floor(t/60),s=Math.floor(t%60).toString().padStart(2,'0');
    return `${m}:${s}`;
  }

  audio.addEventListener('timeupdate',()=>{
    document.getElementById('progressBar').value=(audio.currentTime/audio.duration)*100||0;
    document.getElementById('currentTime').textContent=formatTime(audio.currentTime);
    document.getElementById('duration').textContent=formatTime(audio.duration);
  });

  document.getElementById('progressBar').addEventListener('input', e=>{
    audio.currentTime=(e.target.value/100)*audio.duration;
  });

  audio.addEventListener('ended',()=>{
    currentTrack=(currentTrack+1)%tracks.length;
    playTrack(currentTrack);
  });

  function playTrack(i){
    currentTrack=i;
    const list = document.querySelectorAll('#tracklist > div');
    list.forEach(n=>n.classList.toggle('active-track', n===list[i]));
    audio.src=tracks[i].url;
    audio.play().catch(()=>{});
    showPauseIcon();
    isPlaying=true;
  }

  const tracklistEl = document.getElementById('tracklist');
  tracks.forEach((t,i)=>{
    const el=document.createElement('div');
    el.innerHTML=`${String(i+1).padStart(2,'0')}. ${t.title}<span>${t.length}</span>`;
    el.onclick=()=>playTrack(i);
    tracklistEl.appendChild(el);
  });

  playTrack(0);
});
