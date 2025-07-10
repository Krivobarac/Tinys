class ArticleHeaderComponent extends HTMLElement {
    connectedCallback() {
        const target = this.getAttribute('target')
        const articleHeaderTitle = this.getAttribute('article-header-title')
        this.innerHTML = `
            <header class="article-header article-header--${target}">
                <h1 class="article-header__title">
                    ${articleHeaderTitle}
                </h1>
            </header>
        `;
    }
}

customElements.define("article-header-component", ArticleHeaderComponent);
