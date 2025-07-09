class BlogSectionComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="blog-section container" id="blog">
                <div class="section-header">
                    <p class="section-title">OUR BLOGS</p>
                    <h3 class="section-subtitle">Follow the latest news</h3>
                </div>
                <div class="blog-section__wrapper">
                    <article class="blog-section__item">
                        <a href="blog/3-things-need-to-know-when-renovating-kitchen.html" class="blog-section__img">
                            <img src="src/assets/img/blog-gallery/Kitchen remodeling.webp" alt="" width="100%" height="100%"
                                loading="lazy">
                        </a>
                        <a href="blog/3-things-need-to-know-when-renovating-kitchen.html" class="blog-section__title">
                            3 Things You Need to Know When Renovating Your Kitchen
                        </a>
                        <div class="blog-section__date">
                            <i class="fa-solid fa-calendar-days"></i>
                            <span>06/25/2025</span>
                        </div>
                        <p class="blog-section__text">
                            Renovating your kitchen can be an exciting yet daunting task. It's a space where
                            functionality meets style, and careful planning can make a world of difference.
                            Whether you're aiming for a complete overhaul or just a few updates, here are...
                        </p>
                        <a href="blog/3-things-need-to-know-when-renovating-kitchen.html" class="blog-section__link">read
                            more
                        </a>
                    </article>
                    <article class="blog-section__item">
                        <a href="blog/3-things-didn't-know-about-how-to-properly-garden.html" class="blog-section__img">
                            <img src="src/assets/img/blog-gallery/gardener-plants-flowers-garden-closeup-garden-care-gardening-concept.webp"
                                alt="" width="100%" height="100%" loading="lazy">
                        </a>
                        <a href="blog/3-things-didn't-know-about-how-to-properly-garden.html" class="blog-section__title">
                                3 Things You Didn't Know About How to Properly Garden
                            </a>
                            <div class="blog-section__date">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>06/01/2025</span>
                            </div>
                            <p class="blog-section__text">
                                Gardening is one of those rewarding hobbies that connects us to nature,
                                brightens up our spaces, and even improves our mood. But while many of us jump in
                                with enthusiasm, there are some important gardening tips that often get overlooked...
                            </p>
                            <a href="blog/3-things-didn't-know-about-how-to-properly-garden.html" class="blog-section__link">read
                                more
                            </a>
                    </article>
                    <article class="blog-section__item">
                        <a href="blog/reimagine-kitchen.html" class="blog-section__img">
                            <img src="src/assets/img/blog-gallery/kitchen.webp" alt="" width="100%" height="100%" loading="lazy">
                        </a>
                        <a href="blog/reimagine-kitchen.html" class="blog-section__title">
                                Reimagine your kitchen with Tiny's Remodeling
                            </a>
                            <div class="blog-section__date">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>05/09/2025</span>
                            </div>
                            <p class="blog-section__text">
                                Kitchen remodeling with Tiny's Remodeling goes beyond aesthetics - it's about creating a space
                                that enhances how you live every day. From thoughtful layouts to cohesive design and expert
                                execution, we help Tampa Bay homeowners bring their vision to life.
                            </p>
                            <a href="blog/reimagine-kitchen.html" class="blog-section__link">read more</a>
                    </article>
                    <article class="blog-section__item">
                        <a href="blog/modern-bathroom-makeover.html" class="blog-section__img">
                            <img src="src/assets/img/blog-gallery/bathroom.webp" alt="" width="100%" height="100%" loading="lazy">
                        </a>
                        <a href="blog/modern-bathroom-makeover.html" class="blog-section__title">
                                Modern bathroom makeover
                            </a>
                            <div class="blog-section__date">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>05/09/2025</span>
                            </div>
                            <p class="blog-section__text">
                                Bathroom remodeling with Tiny's Remodeling isn't just about upgrading tiles — it's about
                                creating a space that brings ease, comfort, and style to your everyday routine. From smart
                                layouts to personal design touches, we help Tampa Bay homeowners... </p>
                            <a href="blog/modern-bathroom-makeover.html" class="blog-section__link">
                                read more
                            </a>
                    </article>
                    <article class="blog-section__item">
                        <a href="blog/los-angeles-fires-restore-home.html" class="blog-section__img">
                            <img src="src/assets/img/blog-gallery/la-fire.webp" alt="the plane extinguishes the fire in los angeles"
                                width="100%" height="100%" loading="lazy">
                        </a>
                        <a href="blog/los-angeles-fires-restore-home.html" class="blog-section__title">
                                Fires in Los Angeles Are Coming to an End: Let Us Help Restore
                                Your Home
                            </a>
                            <div class="blog-section__date">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>01/11/2025</span>
                            </div>
                            <p class="blog-section__text">
                                Los Angeles is no stranger to the threat of wildfires. Each year,
                                especially during the dry seasons, countless residents face the
                                devastating impact of these natural disasters. This year,
                            </p>
                            <a href="blog/los-angeles-fires-restore-home.html" class="blog-section__link">
                                read more
                            </a>
                    </article>
                </div>
            </section>
        `;

        const wrapper = this.querySelector('.blog-section__wrapper');
        const items = wrapper.querySelectorAll('.blog-section__item');
        let itemsNumber = this.getAttribute('items') ?? items.length;

        items.forEach((item, index) => {
            if (index >= itemsNumber) {
                item.style.display = 'none';
            }
        });
    }
}

customElements.define("blog-section-component", BlogSectionComponent);
