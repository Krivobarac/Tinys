class ProjectsSectionComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="projects-section container">
                <div class="projects-section__header">
                    <h2 class="projects-section__header__title">our projects</h2>
                    <p class="projects-section__header__subtitle">innovative solutions, real results</p>
                    <p class="projects-section__header__text">
                        Explore our diverse portfolio of projects that showcase our commitment
                        to excellence, sustainability, and creativity. From concept to
                        completion, each project reflects our passion for quality and
                        attention to detail..
                    </p>
                </div>
                <div class="projects-section__wrapper">
                    <a href="projects.html#projects" class="projects-section__item">
                        <img src="src/assets/img/projects-gallery/stairs2.jpg" alt="image of stairs">
                        <div class="projects-section__overlay">
                            <h3 class="projects-section__name">stairs project</h3>
                            <p class="projects-section__location">orlando</p>
                        </div>
                    </a>
                    <a href="projects.html#projects" class="projects-section__item projects-section__item--hidden">
                        <img src="src/assets/img/projects-gallery/Wood Floor After2.jpg" alt="image of wood floor">
                        <div class="projects-section__overlay">
                            <h3 class="projects-section__name">wood floor project</h3>
                            <p class="projects-section__location">orlando</p>
                        </div>
                    </a>
                    <a href="projects.html#projects" class="projects-section__item projects-section__item--hidden">
                        <img src="src/assets/img/projects-gallery/Floor &amp; Walls After2.jpg" alt="image of floor and walls">
                        <div class="projects-section__overlay">
                            <h3 class="projects-section__name">floor &amp; walls project</h3>
                            <p class="projects-section__location">treasure island</p>
                        </div>
                    </a>
                    <a href="projects.html#projects" class="projects-section__item projects-section__item--hidden">
                        <img src="src/assets/img/projects-gallery/wal-window2.jpg" alt="image of wall window">
                        <div class="projects-section__overlay">
                            <h3 class="projects-section__name">wall with window project</h3>
                            <p class="projects-section__location">Clearwater Beach</p>
                        </div>
                    </a>
                    <a href="projects.html#projects" class="projects-section__item">
                        <img src="src/assets/img/projects-gallery/corner pantry after2.jpg" alt="image of corner pantry">
                        <div class="projects-section__overlay">
                            <h3 class="projects-section__name">corner pantry project</h3>
                            <p class="projects-section__location">orlando</p>
                        </div>
                    </a>
                    <a href="projects.html#projects" class="projects-section__item">
                        <img src="src/assets/img/projects-gallery/Kitchen.png" alt="image of kitchen">
                        <div class="projects-section__overlay">
                            <h3 class="projects-section__name">kitchen &amp; bathroom project</h3>
                            <p class="projects-section__location">orlando</p>
                        </div>
                    </a>
                </div>
                <div class="projects-section__btn">
                    <a href="projects.html" class="btn-primary">see more</a>
                </div>
                <img src="src/assets/img/hammer.png" class="projects-section__hammer" alt="image of hammer">
            </section>
        `;
    }
}

customElements.define("projects-section-component", ProjectsSectionComponent);
