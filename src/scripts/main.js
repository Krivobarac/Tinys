import './components/nav-component.js';
import './components/footer-component.js';
import './components/socials-component.js';
import './components/qa-component.js';
import './components/arrow-up-component.js';
import './components/contact-form-component.js';
import './components/numb-counters-component.js';
import './components/blog-section-component.js';
import './components/projects-section-component.js';
import './components/article-header-component.js';
import './components/article-sharing-component.js';

// Function to toggle the background color visibility of the navigation bar on scrolling
(function () {
    const nav = document.querySelector(".nav");
    const className = "scrolled";

    document.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add(className);
        } else {
            nav.classList.remove(className);
        }
    });
})();

// Function to hide the navigation menu when the user scrolls or resizes the window
(function () {
    const navToogler = document.querySelector('#nav-toggle');

    navToogler.addEventListener('change', () => {
        if (navToogler.checked) {
            const uncheckNavToggler = () => {
                navToogler.checked = false;
                window.removeEventListener('scroll', uncheckNavToggler);
                window.removeEventListener('resize', uncheckNavToggler);
            };

            window.addEventListener('scroll', uncheckNavToggler);
            window.addEventListener('resize', uncheckNavToggler);
        }
    });
})();

// Function to load more slide items in projects slider items on small screen
(function loadMore() {
    let loadMoreBtn = document.querySelector(".projects--btn");

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            let projects = document.querySelectorAll('[data-item="projects-item"]');
            projects.forEach((project) => project.classList.remove("hidden"));

            window.addEventListener("resize", () => {
                if (window.innerWidth > 768) {
                    for (let i = 3; i < projects.length; i++) {
                        projects[i].classList.add("hidden");
                    }
                }
            });
        });
    }
})();

// This function moves the slides of a project slider left or right by updating the current slide index
// and applying a horizontal translation to show the correct slide. It wraps around if the index goes out of bounds.
(function moveSlider() {
    let slideIndices = {
        slider1: 0,
        slider2: 0,
        slider3: 0,
        slider4: 0,
        slider5: 0,
        slider6: 0,
    };

    window.moveSlide = (step, sliderId) => {
        const slider = document.querySelector(`#${sliderId} .projects__slides`);
        const totalSlides = slider.children.length;

        slideIndices[sliderId] += step;

        if (slideIndices[sliderId] >= totalSlides) {
            slideIndices[sliderId] = 0;
        } else if (slideIndices[sliderId] < 0) {
            slideIndices[sliderId] = totalSlides - 1;
        }

        slider.style.transform = `translateX(-${slideIndices[sliderId] * 100}%)`;
    }
})();

(function qaCollapse() {
    const qaItems = document.querySelectorAll('[data-key="qa-item"]');

    qaItems.forEach((item) => {
        item.addEventListener("click", () => {
            const answer = item.querySelector('[data-key="qa-body"]');
            const arrowIcon = item.querySelector("i");

            const isActive = item.classList.contains("active");

            qaItems.forEach((item) => {
                item.classList.remove("active");
                item.querySelector('[data-key="qa-body"]').classList.remove("active");
                item.querySelector("i").classList.remove("active");
            });

            if (!isActive) {
                item.classList.add("active");
                answer.classList.add("active");
                arrowIcon.classList.add("active");
            }
        });
    });
})();

(function arrowUpHandle() {
    const arrowUp = document.querySelector(".arrow__up");

    if (arrowUp) {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                arrowUp.classList.add("active");
            } else {
                arrowUp.classList.remove("active");
            }
        });

        const scrollBtn = document.querySelector(".arrow__up");

        scrollBtn.addEventListener("click", () => {
            window.scroll({ top: 0, behavior: "smooth" });
        });
    }
})();
