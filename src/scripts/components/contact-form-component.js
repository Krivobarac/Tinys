class ContactFormComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="form container" id="contact">
                <div class="form__text-block">
                    <h3 class="form__title">Get in touch with us</h3>
                    <p class="form__text">
                        Any question you might have, this would be the best way to leave your
                        information in order for us to reach out and schedule a meeting.
                    </p>
                    <a href="tel:+1 (321) 265 - 9840" class="form__link">
                        <span class="fa-solid fa-phone" aria-hidden="true"></span>+1 (321) 265
                        - 9840
                    </a>
                    <a href="mailto:remodelingtiny@gmail.com" target="_blank" class="form__link">
                        <span class="fa-regular fa-envelope" aria-hidden="true"></span>remodelingtiny@gmail.com
                    </a>
                    <a href="https://www.instagram.com/tinys_remodeling/" class="form__link">
                        <span class="fa-brands fa-instagram" aria-hidden="true"></span>@tinys_remodeling
                    </a>
                    <a href="https://maps.app.goo.gl/9Bw5oBGh66REA7sd8" class="form__link">
                        <span class="fa-solid fa-location-dot" aria-hidden="true"></span>1429 Temple St. Clearwater, FL 33756
                    </a>
                </div>
                <form class="form__form-block">
                    <div class="form__box">
                        <label for="name" class="form__label">first name</label>
                        <input type="text" id="name" name="name" placeholder="first name" class="form__input" required>
                    </div>
                    <div class="form__box">
                        <label for="surname" class="form__label">last name</label>
                        <input type="text" id="surname" name="surname" placeholder="last name" class="form__input" required>
                    </div>
                    <div class="form__box">
                        <label for="email" class="form__label">email address</label>
                        <input type="email" id="email" name="email" placeholder="email" class="form__input" required>
                    </div>
                    <div class="form__box">
                        <label for="message" class="form__label">reason for contact</label>
                        <textarea id="message" name="message" placeholder="message" class="form__textarea" required></textarea>
                    </div>
                    <button class="btn btn-primary from__btn">
                        submit
                    </button>
                </form>
            </section>`;
    }
}

customElements.define("contact-form-component", ContactFormComponent);
