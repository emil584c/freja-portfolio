
const hamburger = document.getElementById('hamburger');
const navLink = document.querySelector('.nav__link');


function toggleMenu(){
  navLink.classList.toggle('hide');
  }



hamburger.addEventListener('click', toggleMenu);


let navToggle = document.querySelector('.nav-toggle')
let bars = document.querySelectorAll('.bar')

function toggleHamburger(e) {
  bars.forEach(bar => bar.classList.toggle('x'))
}

navToggle.addEventListener('click', toggleHamburger);


const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



const projectButton = document.getElementById('projects');
const projects = document.getElementById('project-list')

projectButton.addEventListener('click', function handleClick() {
    if (projects.style.display = "none"){
        projects.style.display = "flex";
    }else {
        projects.display ="none";
    }
})












