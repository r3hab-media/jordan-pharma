var body = document.querySelector("body");
var openMenu = document.querySelectorAll(".menuControl, .menu nav a");

for (var i = 0; i < openMenu.length; i++) {
  openMenu[i].addEventListener("click", function (e) {
    body.classList.toggle("menu--active");
  });  
}

var currYr = new Date().getFullYear();
thisYear.textContent = currYr; 