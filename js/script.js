
const hamburger = document.getElementById('hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});



let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger)