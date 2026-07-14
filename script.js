document.addEventListener("DOMContentLoaded", () => {
    
    // NAVIGATION SCROLL EFFECTS
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        // Change navbar size when scrolled
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Active Navigation Link Highlighting
        let activeId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 180)) {
                activeId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${activeId}`) {
                link.classList.add("active");
            }
        });
    });

    // MOBILE NAVIGATION TOGGLE
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-links");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navList.classList.toggle("active");
            mobileMenu.classList.toggle("open");
        });
    }

    // INTERSECTION OBSERVER FOR SMART SCROLL REVEAL
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Reveal once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // CONTACT FORM INTERACTION
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector(".form-btn");
            const originalText = submitBtn.textContent;

            submitBtn.textContent = "Processing Connection Request...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none";

            setTimeout(() => {
                alert("Thank you! Your direct portfolio inquiry was processed securely.");
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.opacity = "1";
                submitBtn.style.pointerEvents = "auto";
            }, 1800);
        });
    }
});