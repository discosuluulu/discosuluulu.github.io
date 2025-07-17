document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('audio');
  let currentAlbum = gardenAlbum;
  let currentTrackIndex = 0;

  const albumTitleEl = document.getElementById('albumTitle');
  const albumSubtitleEl = document.getElementById('albumSubtitle');
  const tracklistEl = document.getElementById('trackList');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextAlbumBtn = document.getElementById('nextAlbum');
  const progress = document.getElementById('progress');
  const progressFilled = document.getElementById('progressFilled');
  const currentTimeEl = document.getElementById('currentTime');
  const durationEl = document.getElementById('duration');

  const audioPlayer = document.getElementById('audioPlayer');
  const maximizePlayerBtn = document.getElementById('maximizePlayer');
  const minimizePlayerBtn = document.getElementById('minimizePlayer');
  const logo = document.getElementById('logo');

  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');

  maximizePlayerBtn.addEventListener('click', () => {
    audioPlayer.classList.add('show');
    logo.classList.add('logo-small');
    maximizePlayerBtn.style.display = 'none';
  });

  minimizePlayerBtn.addEventListener('click', () => {
    audioPlayer.classList.remove('show');
    logo.classList.remove('logo-small');
    maximizePlayerBtn.style.display = 'inline-block';
  });

  function loadAlbum(album) {
    currentAlbum = album;
    currentTrackIndex = 0;
    albumTitleEl.textContent = album.title;
    albumSubtitleEl.textContent = album.subtitle;
    renderTracklist();
    loadTrack(currentTrackIndex);
  }

  function renderTracklist() {
    tracklistEl.innerHTML = '';
    currentAlbum.tracks.forEach((track, index) => {
      const trackEl = document.createElement('div');
      trackEl.classList.add('track');
      trackEl.innerHTML = `
        <span class="track-title">${index + 1}. ${track.title}</span>
        <span class="track-length">${track.length}</span>
      `;
      trackEl.addEventListener('click', () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        playAudio();
      });
      tracklistEl.appendChild(trackEl);
    });
  }

  function updateTrackHighlight() {
    const trackEls = tracklistEl.querySelectorAll('.track');
    trackEls.forEach(el => el.classList.remove('playing'));
    if (trackEls[currentTrackIndex]) {
      trackEls[currentTrackIndex].classList.add('playing');
    }
  }

  function loadTrack(index) {
    const track = currentAlbum.tracks[index];
    audio.src = track.url;
    updateTrackHighlight();
  }

  function playAudio() {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
  }

  function pauseAudio() {
    audio.pause();
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'inline-block';
  }

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  });

  nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % currentAlbum.tracks.length;
    loadTrack(currentTrackIndex);
    playAudio();
  });

  prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + currentAlbum.tracks.length) % currentAlbum.tracks.length;
    loadTrack(currentTrackIndex);
    playAudio();
  });

  nextAlbumBtn.addEventListener('click', () => {
    currentAlbum = currentAlbum === gardenAlbum ? otucanAlbum : gardenAlbum;
    loadAlbum(currentAlbum);
  });

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.width = percent + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  });

  progress.addEventListener('click', (e) => {
    const rect = progress.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / rect.width;
    audio.currentTime = percent * audio.duration;
  });

  function formatTime(time) {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Load default album
  loadAlbum(currentAlbum);
});
