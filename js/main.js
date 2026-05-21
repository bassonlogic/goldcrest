function toggleMenu() {
  document.querySelector('nav ul').classList.toggle('open');
}

document.addEventListener('click', function (e) {
  const nav = document.querySelector('nav ul');
  const hamburger = document.querySelector('.hamburger');
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});
