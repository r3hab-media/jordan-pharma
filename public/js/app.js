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

var currYr = new Date().getFullYear();
thisYear.textContent = currYr; 

