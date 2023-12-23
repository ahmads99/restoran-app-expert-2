class PrologueElement extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
      <section id="prologue" class="prologue">
        <section class="image-prologue">
          <img
            src="./images/other/prolog-1.jpg"
            alt="foto best restaurant in jkt Union"
            class="prologue-image"
            loading="lazy"
          />
          <div class="overlay">
            <div class="title">
              <h2>Union Senayan City</h2>
              <p>Jakarta, Indonesia</p>
            </div>
          </div>
        </section>
        <article class="text-prologue">
          <h2>Pendahuluan</h2>
          <p>
          Restaurant Mads adalah sebuah platform katalog restoran yang berbasis website. Platform ini menyediakan daftar restoran dari berbagai daerah di Indonesia, mulai dari Sabang hingga Merauke. Restaurant Mads menampilkan berbagai informasi mengenai restoran yang terkait, seperti rating, lokasi, dan deskripsi restoran. Dengan adanya Restaurant Mads, diharapkan dapat membantu memberikan gambaran dan deskripsi mengenai restoran yang akan dikunjungi. Restaurant Mads dapat membantu Anda menemukan restoran Indonesia yang terkenal di luar negeri, seperti Lada Resto di Sanur, Bali yang merupakan salah satu restoran Indonesia terbaik di dunia menurut ulasan di Tripadvisor.
          </p>
        </article>
      </section>
    `;
  }
}

customElements.define('prologue-element', PrologueElement);
