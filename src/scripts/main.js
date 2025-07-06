import './components/nav-component.js';
import './components/footer-component.js';
import './components/socials-component.js';

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
}) ();

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
}) ();
