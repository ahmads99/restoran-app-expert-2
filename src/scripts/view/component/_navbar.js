import element from '../../utilities/get-element';

const { getElement, getElementAll } = element;

class Navbar extends HTMLElement {
  constructor() {
    super();
    this._isNavlistMobileShow = false;
    this._DURATION_TRANSITION = 450;
  }

  connectedCallback() {
    this._render();
    this._humButtonClickHandler();
    this._navbarActiveScrollHandler();
    this._navLinkActiveClickHandler();
  }

  _render() {
    this.innerHTML = `
      <nav class="navbar">
        <section class="logo">
          <img src="./images/logo/logo-1.png" alt="logo restaurant-mads" />
          <h1>restaurant-mads</h1>
        </section>
        <button type="button" class="hum-button" title="buka tautan navigation">
          <i
            class="fa-solid fa-bars button-icon show fade"
            aria-label="bars menu"
          ></i>
        </button>
        <ul class="nav-list">
          <li><a class="nav-link" href="#/home">Beranda</a></li>
          <li><a class="nav-link" href="#/favorite">Favorit</a></li>
          <li><a class="nav-link" href="https://www.instagram.com/trilogi_univ/" target="_blank">Contact</a></li>
          <li><a class="nav-link" href="https://www.dicoding.com/" target="_blank">Dicoding</a></li>
        </ul>
      </nav>
    `;
  }

  _humButtonClickHandler() {
    const humButton = getElement('.hum-button');
    const buttonIcon = getElement('.button-icon');
    const navList = getElement('.nav-list');

    humButton.addEventListener('click', (event) => {
      event.stopPropagation();

      if (!this._isNavlistMobileShow) {
        this._showNavList(buttonIcon, navList);
        this._isNavlistMobileShow = true;
      } else {
        this._hideNavList(buttonIcon, navList);
        this._isNavlistMobileShow = false;
      }
    });
  }

  _navbarActiveScrollHandler() {
    window.addEventListener('scroll', () => {
      const header = getElement('header');
      const navbar = getElement('.navbar');

      this._navbarActiveScroll(header, navbar);
    });
  }

  _navLinkActiveClickHandler() {
    const navLinks = getElementAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.stopPropagation();

        this._resetActiveNavLink(navLinks);
        link.classList.add('active');
      });
    });
  }

  _showNavList(buttonIcon, navList) {
    // change icon
    buttonIcon.classList.replace('fade', 'not-fade');
    setTimeout(() => {
      buttonIcon.classList.replace('not-fade', 'fade');
      buttonIcon.classList.replace('fa-bars', 'fa-xmark');
    }, this._DURATION_TRANSITION);

    // show nav-link
    navList.classList.add('show');
    setTimeout(() => {
      navList.classList.toggle('open');
    }, this._DURATION_TRANSITION);
  }

  _hideNavList(buttonIcon, navList) {
    // change icon
    buttonIcon.classList.replace('fade', 'not-fade');
    setTimeout(() => {
      buttonIcon.classList.replace('not-fade', 'fade');
      buttonIcon.classList.replace('fa-xmark', 'fa-bars');
    }, this._DURATION_TRANSITION);

    // hide nav-link
    navList.classList.toggle('open');
    setTimeout(() => {
      navList.classList.remove('show');
    }, this._DURATION_TRANSITION);
  }

  _navbarActiveScroll(header, navbar) {
    if (header.offsetHeight - 10 < window.scrollY) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  }

  _resetActiveNavLink(navLinks) {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
  }
}

customElements.define('app-bar', Navbar);
