// const id = "base-url";
const getPort = window.location.port;
const devBase = 'http://r3hab-media:5500/public/';
const prodBase = 'https://jordan-pharma-dev.web.app';
const base = document.createElement('base');

if (getPort === '5500') {
  base.href = devBase;
  document.getElementsByTagName("head")[0].appendChild(base);
} else {
  base.href = prodBase;
  document.getElementsByTagName("head")[0].appendChild(base);
}

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-bars-staggered'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fa-solid fa-xmark'></i>";
  }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);

// var body = document.querySelector("body");
// var openMenu = document.querySelectorAll(".menuControl, .menu nav a");

// for (var i = 0; i < openMenu.length; i++) {
//   openMenu[i].addEventListener("click", function (e) {
//     body.classList.toggle("menu--active");
//   });  
// }

//slides
let slideIndex = 0;
document.querySelector('.slideshow') ? showSlides() : null;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";    
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

window.onresize = function resizeHandler() {
  const left = document.querySelector(".slider-box__left--content");
  const right = document.querySelector(".slider-box__right");
  right.style.height = `${left.clientHeight}px`;
  right.style.width = `${left.clientWidth}px`;
};

//accordion
let acc = document.getElementsByClassName("accordion");
let j;

for (j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var currYr = new Date().getFullYear();
thisYear.textContent = currYr; 

