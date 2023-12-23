import element from '../../utilities/get-element';
import skipToMainContent from '../../utilities/skip-content-handler';

const { getElement, getElementAll } = element;
class HeroElement extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this._goToPrologue();
  }

  _render() {
    this.innerHTML = `
      <section class="hero">
        <button type="button" class="skip-content home" tabindex="1">lanjutkan ke konten</button>
        <img
          src="./images/heros/hero-image_4.jpg"
          alt="background dengan berbagai macam makanan"
          class="hero-image"
          loading="lazy"
        />
        <div class="overlay">
          <h2>*restaurant*<br>mads</h2>
          <h3>Temukan pilihan restaurant terbaik di Indonesia.</h3>
          <button type="button" id="button-prologue" class="button">Pendahuluan</button>
        </div>
      </section>
    `;
  }

  _goToPrologue() {
    getElement('#button-prologue').addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();

      const prologue = getElement('.prologue');

      if (prologue) {
        prologue.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

customElements.define('hero-element', HeroElement);
