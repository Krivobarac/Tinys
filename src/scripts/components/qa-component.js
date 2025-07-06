class QAComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="qa container">
                <h3 class="qa__title">Maybe you can find your answer here</h3>

                <div class="qa__collapsable">
                    <article class="qa__item" data-key="qa-item">
                        <div class="qa__header">
                            <p class="qa__question">
                                How long does a typical home renovation project take?
                            </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="qa__body" data-key="qa-body">
                            The timeline depends on the size and complexity of the project.
                            Small repairs may take a few hours or days, while larger
                            renovations, like kitchen or bathroom remodeling, can take several
                            weeks or months.
                        </div>
                    </article>

                    <article class="qa__item" data-key="qa-item">
                        <div class="qa__header">
                            <p class="qa__question">
                                Can I stay in my home during the renovation process?
                            </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="qa__body" data-key="qa-body">
                            It depends on the extent of the work. For minor renovations, staying
                            at home is usually fine. However, for major projects involving
                            plumbing, electricity, or structural changes, temporarily relocating
                            might be more comfortable.
                        </div>
                    </article>

                    <article class="qa__item" data-key="qa-item">
                        <div class="qa__header">
                            <p class="qa__question">
                                Do you provide free estimates or consultations?
                            </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="qa__body" data-key="qa-body">
                            Yes, we offer free estimates to help you understand the scope of
                            your project and costs involved before committing.
                        </div>
                    </article>

                    <article class="qa__item" data-key="qa-item">
                        <div class="qa__header">
                            <p class="qa__question">
                                What materials do you use, and can I choose my own?
                            </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="qa__body" data-key="qa-body">
                            We use high-quality materials tailored to your project's needs.
                            You're welcome to select your own materials or consult with us for
                            recommendations.
                        </div>
                    </article>

                    <article class="qa__item" data-key="qa-item">
                        <div class="qa__header">
                            <p class="qa__question">
                                Can you help with outdoor renovations, like gardens or patios?
                            </p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="qa__body" data-key="qa-body">
                            Absolutely! We offer services for landscaping, patio construction,
                            garden design, and other outdoor enhancements to complement your
                            home's style.
                        </div>
                    </article>

                    <article class="qa__item" data-key="qa-item">
                        <div class="qa__header">
                            <p class="qa__question">Do you offer warranties on your work?</p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                        <div class="qa__body" data-key="qa-body">
                            Yes, we provide warranties on our services to ensure your
                            satisfaction and peace of mind. The warranty details depend on the
                            type of work completed.
                        </div>
                    </article>
                </div>
            </section>`;
    }
}

customElements.define("qa-component", QAComponent);
