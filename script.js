document.getElementById('explore-btn').addEventListener('click', () => {
  document.querySelector('.landing-content').style.display = 'none';
  document.getElementById('audio-player-container').classList.remove('hidden');
  document.getElementById('bg-video').play();
  window.dispatchEvent(new Event('startAudio'));
});
