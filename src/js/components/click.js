const links = document.querySelectorAll('.header__link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(otherLink => otherLink.classList.remove('active'));
    this.classList.add('active');
  });
});
