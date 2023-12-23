import generateCurrentYear from '../../utilities/get-current-year';
import element from '../../utilities/get-element';

class FooterElement extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this._printCurrentYear();
  }

  _render() {
    this.innerHTML = `
      <footer>
        <section class="company-footer">
          <div class="logo">
            <img src="./images/logo/logo-1.png" alt="logo restaurant-mads" />
            <h2>restaurant-mads</h2>
          </div>
          <div class="company-copyright">
            <h2>
              &copy; Copyright <span class="year"></span> -
              <span class="company-name">restaurant-mads</span>
            </h2>
          </div>
        </section>
      </footer>
    `;
  }

  _printCurrentYear() {
    const elementYearText = element.getElementAll('.year');
    elementYearText.forEach((yearText) => generateCurrentYear(yearText));
  }
}

customElements.define('footer-element', FooterElement);
