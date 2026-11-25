/* =====================================
YAYA MOHAMMED — PORTFOLIO JAVASCRIPT
===================================== */

document.addEventListener(“DOMContentLoaded”, () => {

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
function closeMenu() {
    if (!menuToggle || !navbar) return;
    navbar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}
if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
    document.addEventListener("click", event => {
        const clickedInsideMenu = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);
        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
// AUTOMATIC COPYRIGHT YEAR
const currentYear = document.getElementById("current-year");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}
// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        const linkTarget = link.getAttribute("href");
                        link.classList.toggle(
                            "active",
                            linkTarget === `#${currentId}`
                        );
                    });
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0
        }
    );
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

});
