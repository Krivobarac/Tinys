class ArrowUpComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<i class="arrow__up fa-solid fa-chevron-up"></i>`;
    }
}

customElements.define("arrow-up-component", ArrowUpComponent);
