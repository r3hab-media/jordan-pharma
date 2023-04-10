// Utility functions
const forEach = (elements, callback) => Array.from(elements).forEach(callback);

// Slides
const sliderExist = document.querySelectorAll('.slider-box').length > 0;

if (sliderExist) {
  let slideIndex = 0;
  document.querySelector('.slideshow') && showSlides();
  
  function showSlides() {
    const slides = document.getElementsByClassName("slideshow__slide");
    forEach(slides, (slide) => slide.style.display = "none");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";    
    setTimeout(showSlides, 4000);
  }
  
  window.onresize = function() {
    const left = document.querySelector(".slider-box__left--content");
    const right = document.querySelector(".slider-box__right");
    right.style.height = `${left.clientHeight}px`;
    right.style.width = `${left.clientWidth}px`;
  };  
}

// Accordion
const acc = document.getElementsByClassName("accordion");
forEach(acc, (elem) => {
  elem.addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight * 1.2 + "px";
  });
});

// Quotes
const quotesExist = document.querySelectorAll('.myQuotes').length > 0;

if (quotesExist) {
  window.onload = function() {
    setInterval(() => plusQuotes(1), 20000);
  }
  
  let quoteIndex = 0;

  function showQuotes() {
    const quotes = document.getElementsByClassName("myQuotes");
    forEach(quotes, (quote) => quote.style.display = "none");
    quotes[quoteIndex].style.display = "block";
  }

  function plusQuotes(n) {
    const quotes = document.getElementsByClassName("myQuotes");
    quoteIndex = (quoteIndex + n) % quotes.length;
    showQuotes();
  }
  
  showQuotes();
}

// Page title
const changePageTitle = () => {
  const newPageTitle = document.querySelector('main h3').textContent;
  document.querySelector('title').textContent = `Jordan Pharma Compliance | ${newPageTitle}`;
};

window.addEventListener('load', changePageTitle);