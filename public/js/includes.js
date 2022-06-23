//header 
class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="top">
      <div class="top__left">
        <a href="index.html">
          <img src="https://jordan-pharma.imgix.net/logo.png" alt="jordan pharma logo">
        </a>
      </div>
      <div class="top__right">
        <h3>Have questions? Give us a call!</h3>
        <span><a href="tel:2403081719">240-308-1719</a></span>
      </div>
    </div>
    <nav>
      <ul class="menu">
        <li class="item">
          <a href="index.html">Home</a>
        </li>
        <li class="item">
          <a href="our-solutions.html">Our Solutions</a>
        </li>
        <li class="item">
          <a href="contact-us.html">Contact Us</a>
        </li>
        <li class="toggle">
          <a href="javascript:;">
            <i class="fa-solid fa-bars-staggered"></i>
          </a>
        </li>
      </ul>
    </nav>    
    `
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
  }
}

customElements.define('main-header', MainHeader);

//footer
class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <div class="footer__content">
        <div class="footer__content--company">
          Jordan Pharma Compliance, LLC.
        </div>
        <div class="footer__content--rights">
          All Rights Reserved &copy; <span id="thisYear"></span>
        </div>
      </div>
    </footer>  
    `
    var currYr = new Date().getFullYear();
    thisYear.textContent = currYr;
  }
}

customElements.define('main-footer', MainFooter);