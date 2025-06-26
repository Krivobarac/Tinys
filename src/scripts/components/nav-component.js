class NavComponent extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active-page')
        this.innerHTML = `
                    <nav class="nav">
                        <input type="checkbox" id="nav-toggle" hidden>

                        <label class="nav__hamburger" id="hamburger" for="nav-toggle">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </label>

                        <a href="index.html" class="nav__logo">
                            <img src="src/assets/img/desktop-logo.webp" alt="Tiny's desktop logo" class="nav__logo-desktop">
                            <img src="src/assets/img/mobile-logo.webp" alt="Tiny's mobile logo" class="nav__logo-mobile">
                        </a>

                        <ul class="nav__list">
                            <li><a href="projects.html" class="nav__link ${activePage === 'projects' ? 'active' : ''}">projects</a></li>
                            <li><a href="services.html" class="nav__link ${activePage === 'services' ? 'active' : ''}">services</a></li>
                            <li><a href="about.html" class="nav__link ${activePage === 'about' ? 'active' : ''}">about</a></li>
                            <li><a href="blog.html" class="nav__link ${activePage === 'blog' ? 'active' : ''}">read</a></li>
                            <li>
                                <a href="contact.html" class="nav__link nav__link--btn btn-primary ${activePage === 'contact' ? 'active' : ''}">contact us</a>
                            </li>
                        </ul>

                        <div class="mobile-menu">
                            <label for="nav-toggle">
                                <i class="fa-regular fa-circle-xmark" id="close"></i>
                            </label>
                            
                            <ul class="mobile-menu__list">
                                <li>
                                    <a href="projects.html" class="mobile-menu__link ${activePage === 'projects' ? 'active' : ''}">projects</a>
                                </li>
                                <li>
                                    <a href="services.html" class="mobile-menu__link ${activePage === 'services' ? 'active' : ''}">services</a>
                                </li>
                                <li>
                                    <a href="about.html" class="mobile-menu__link ${activePage === 'about' ? 'active' : ''}">about us</a>
                                </li>
                                <li>
                                    <a href="blog.html" class="mobile-menu__link ${activePage === 'blog' ? 'active' : ''}">read</a>
                                </li>
                            </ul>

                            <p class="mobile-menu__text">
                                Transforming spaces, building dreams - <span>together</span> !
                            </p>

                            <div class="mobile-menu__icons">
                                <a href="mailto:remodelingtiny@gmail.com" aria-label="Click to send email">
                                    <i class="fa-regular fa-envelope"></i>
                                </a>
                                <a href="tel:+1 321 265 9840" aria-label="Click to call phone number">
                                    <i class="fa-solid fa-phone"></i>
                                </a>
                                <a href="https://www.instagram.com/tinys_remodeling/" target="_blank"
                                    aria-label="Click to see Instagram profile">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>

                            <a href="contact.html" class="btn btn-primary" ${activePage === 'contact' ? 'active' : ''}>contact us</a>
                        </div>
                    </nav>`;

    }
}

customElements.define("nav-component", NavComponent);
