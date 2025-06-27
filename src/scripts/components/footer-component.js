class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <footer class="footer">
                        <div class="footer__wrapper container">
                            <article class="footer__item">
                                <a href="index.html" class="footer__logo">
                                    <img src="src/assets/img/desktop-logo.webp" alt="tinys remodeling logo for desktop"
                                        class="footer__logo-desktop">
                                    <img src="src/assets/img/mobile-logo.webp" alt="tinys remodeling fro mobile"
                                        class="footer__logo-mobile">
                                </a>

                                <div class="footer__p">
                                    Creating your ideal space through a balanced and collaborative approach to remodeling.
                                </div>

                                <div class="footer__menu">
                                    <a href="projects.html">projects</a>
                                    <a href="services.html">services</a>
                                    <a href="about.html">about</a>
                                    <a href="contact.html">contact</a>
                                </div>
                            </article>

                            <article class="footer__item footer__item--right">
                                <h3 class="footer__heading">
                                    Transforming spaces, building dreams - <span>together</span> !
                                </h3>
                                <a href="contact.html" class="footer__btn btn btn-primary">contact us</a>
                            </article>

                            <div class="footer__social">
                                <a href="mailto:krivobarac83@gmail.com" target="_blank">
                                    <i class="fa-regular fa-envelope"></i></a>

                                <a href="tel:+381601510099">
                                    <i class="fa-solid fa-phone"></i>
                                </a>

                                <a href="https://www.instagram.com/tinys_remodeling/" target="_blank">
                                    <i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="footer__copy container">
                            <p class="footer__copyright">
                                © Copyright 2015 - <span id="year">2025</span> Tiny’s Remodeling LLC. All
                                rights reserved.
                            </p>
                            <p class="footer__copyright">
                                Designed by
                                <a href="https://dinadoesit.com/" style="text-decoration: underline">DinaDoesIt</a>
                            </p>
                        </div>
                    </footer>`;
    }
}

customElements.define("footer-component", FooterComponent);
