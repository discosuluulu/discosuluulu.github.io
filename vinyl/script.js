function showDetails(id) {
  document.querySelectorAll('.details').forEach((section) => {
    section.classList.remove('active');
  });
  const target = document.getElementById('details-' + id);
  if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
