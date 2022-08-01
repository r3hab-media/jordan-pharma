// const id = "base-url";
// const getPort = window.location.port;
// const devBase = 'http://r3hab-media:5500/public/';
// const prodBase = 'https://jordan-pharma.com';
// const base = document.createElement('base');

// if (getPort === '5500') {
//   base.href = devBase;
//   document.getElementsByTagName("head")[0].appendChild(base);
// } else {
//   base.href = prodBase;
//   document.getElementsByTagName("head")[0].appendChild(base);
// }

//slides
const sliderExist = document.querySelectorAll('.slider-box').length > 0;

if (sliderExist) {
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
}

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
      panel.style.maxHeight = panel.scrollHeight * 1.2 + "px";
    } 
  });
}

const quotesExist = document.querySelectorAll('.myQuotes').length > 0;

if (quotesExist) {
  window.onload = function() {
    setInterval(function() {
      plusQuotes(1);
    }, 20000);
  }
  
  var quoteIndex = 1;
  showQuotes(quoteIndex);
  
  function plusQuotes(n) {
    showQuotes(quoteIndex += n);
  }
  
  function currentQuote(n) {
    showQuotes(quoteIndex = n);
  }

  function showQuotes(n) {
    var i;
    var quotes = document.getElementsByClassName("myQuotes");
    if (n > quotes.length) {quoteIndex = 1}    
    if (n < 1) {quoteIndex = quotes.length}
    for (i = 0; i < quotes.length; i++) {
      quotes[i].style.display = "none";  
    }
    quotes[quoteIndex-1].style.display = "block";
  }
}

newPageTitle = document.querySelector('main h3').textContent;
changePageTitle = () => {  
  document.querySelector('title').textContent = `Jordan Pharma Compliance | ${newPageTitle}`;
}
window.addEventListener('onload', changePageTitle());