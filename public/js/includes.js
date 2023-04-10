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
          <li class="item"><a href="index.html">Home</a></li>
          <li class="item"><a href="our-solutions.html">Our Solutions</a></li>
          <li class="item"><a href="contact-us.html">Contact Us</a></li>
          <li class="toggle"><a href="javascript:;"><i class="fa-solid fa-bars-staggered"></i></a></li>
        </ul>
      </nav>    
    `;

    const toggle = this.querySelector(".toggle");
    const menu = this.querySelector(".menu");

    const toggleMenu = () => {
      const isActive = menu.classList.contains("active");
      menu.classList.toggle("active");
      toggle.querySelector("a").innerHTML = `<i class="fa-solid fa-${isActive ? 'bars-staggered' : 'xmark'}"></i>`;
    };

    toggle.addEventListener("click", toggleMenu);
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
    `;

    const currYr = new Date().getFullYear();
    this.querySelector("#thisYear").textContent = currYr;
  }
}

customElements.define('main-footer', MainFooter);