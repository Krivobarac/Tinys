class ArticleSharingComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="article__sharing">
                <div class="article__box">
                    <p class="article__share">Did you find this useful? Call today! (321) 265-9840</p>
                    <div class="article__icons">
                        <a href="https://www.instagram.com/tinys_remodeling/" class="article__link">
                            <span class="fa-brands fa-instagram"></span>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61567153992759" class="article__link">
                            <span class="fa-brands fa-facebook-f"></span>
                        </a>
                    </div>
                </div>
                <div class="article__blogs">
                    <span class="fa-solid fa-caret-left"></span>
                    <a href="../blog.html">All Blogs</a>
                </div>
            </div>
        `;
    }
}

customElements.define("article-sharing-component", ArticleSharingComponent);
