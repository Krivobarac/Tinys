class SocialsComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="social__icons">
                <a href="https://www.instagram.com/tinys_remodeling/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61567153992759" target="_blank">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="tel:+1 321 265 9840">
                    <i class="fa-solid fa-phone"></i>
                </a>
            </div>`;
    }
}

customElements.define("socials-component", SocialsComponent);
