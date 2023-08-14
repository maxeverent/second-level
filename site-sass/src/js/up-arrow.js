const arrowUp = document.querySelector('.up-arrow');

arrowUp.addEventListener('click', (e) => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
