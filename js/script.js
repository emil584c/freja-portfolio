
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

navToggle.addEventListener('click', toggleHamburger);



const projectButton = document.getElementById('projects');
const projects = document.getElementById('project-list')

projectButton.addEventListener('click', function handleClick() {
    if (projects.style.display = "none"){
        projects.style.display = "flex";
    }else {
        projects.display ="none";
    }
})



