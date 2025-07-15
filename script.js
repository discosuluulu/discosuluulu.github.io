document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('audioPlayerContainer').classList.remove('hidden');
  initializePlayer(); // Defined in audioPlayer.js
});
