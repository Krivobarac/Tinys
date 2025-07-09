class NumbCountersComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="numb-counters container" id="counters">
                <div class="numb-counters__item">
                    <p class="numb-counters__number" data-target="250" data-key="counter">0+</p>
                    <p class="numb-counters__name">projects done</p>
                </div>
                <div class="numb-counters__item">
                    <p class="numb-counters__number" data-target="500" data-key="counter">0+</p>
                    <p class="numb-counters__name">satisfied clients</p>
                </div>
                <div class="numb-counters__item">
                    <p class="numb-counters__number" data-target="60" data-key="counter">0+</p>
                    <p class="numb-counters__name">hurricane rebuilds</p>
                </div>
                <div class="numb-counters__item">
                    <p class="numb-counters__number" data-target="45" data-key="counter">0+</p>
                    <p class="numb-counters__name">states served</p>
                </div>
            </section>`;

        const numbers = document.querySelectorAll('[data-key="counter"]');
        let countingStarted = false;

        function counting(number) {
            let target = parseInt(number.getAttribute("data-target"));
            let count = 0;
            let speed = 15;

            let counting = setInterval(() => {
                if (count <= target) {
                    count += Math.ceil(target / 100);
                    number.innerHTML = count;
                } else {
                    number.innerHTML = `${target}+`;
                    clearInterval(counting);
                }
            }, speed);
        }

        window.addEventListener("scroll", () => {
            let sectionPosition =
                numbers[0].closest("section").getBoundingClientRect().top * 1.3;
            let screenHeight = window.innerHeight;

            if (sectionPosition < screenHeight && !countingStarted) {
                numbers.forEach((number) => counting(number));
                countingStarted = true;
            }
        });
    }
}

customElements.define("numb-counters-component", NumbCountersComponent);
