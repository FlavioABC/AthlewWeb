/* ==========================================
   ATHLEW PREMIUM WEBSITE
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                hamburger.classList.remove("active");

            });

        });

    }

    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (window.scrollY > 50) {

            navbar.style.background = "rgba(11,11,11,0.78)";
            navbar.style.backdropFilter = "blur(28px)";
            navbar.style.webkitBackdropFilter = "blur(28px)";
            navbar.style.borderBottom = "1px solid rgba(255,255,255,.08)";

        } else {

            navbar.style.background = "rgba(11,11,11,0.55)";
            navbar.style.backdropFilter = "blur(22px)";
            navbar.style.webkitBackdropFilter = "blur(22px)";
            navbar.style.borderBottom = "1px solid rgba(255,255,255,.05)";

        }

    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    /* ==========================================
       REVEAL ANIMATIONS
    ========================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -80px 0px"
        }

    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    /* ==========================================
       STAGGER COLLECTION CARDS
    ========================================== */

    const collectionCards = document.querySelectorAll(".collection-card");

    collectionCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 120}ms`;

    });

    /* ==========================================
       STAGGER VALUES
    ========================================== */

    const valueCards = document.querySelectorAll(".value-card");

    valueCards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 70}ms`;

    });

    /* ==========================================
       STAGGER TIMELINE
    ========================================== */

    const timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach((item, index) => {

        item.style.transitionDelay = `${index * 90}ms`;

    });

    /* ==========================================
       PARALLAX BLOBS
    ========================================== */

    const blob1 = document.querySelector(".blob-1");
    const blob2 = document.querySelector(".blob-2");
    const blob3 = document.querySelector(".blob-3");

    window.addEventListener("scroll", () => {

        const scroll = window.pageYOffset;

        if (blob1) {
            blob1.style.transform =
                `translateY(${scroll * 0.08}px)`;
        }

        if (blob2) {
            blob2.style.transform =
                `translateY(${scroll * -0.05}px)`;
        }

        if (blob3) {
            blob3.style.transform =
                `translateY(${scroll * 0.04}px)`;
        }

    });

    /* ==========================================
       BUTTON HOVER GLOW
    ========================================== */

    const buttons = document.querySelectorAll(".btn-primary");

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.background =
                `radial-gradient(circle at ${x}px ${y}px,
                rgba(255,255,255,.65),
                rgba(216,180,166,1) 35%,
                rgba(216,197,165,1) 100%)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.background =
                "linear-gradient(135deg,#D8B4A6,#D8C5A5)";

        });

    });

    /* ==========================================
       ACTIVE NAV LINK
    ========================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function highlightMenu() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("current");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("current");

            }

        });

    }

    window.addEventListener("scroll", highlightMenu);
    highlightMenu();

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const button = form.querySelector("button");

            const originalText = button.textContent;

            button.textContent = "Mensaje Enviado";
            button.disabled = true;

            setTimeout(() => {

                button.textContent = originalText;
                button.disabled = false;

                form.reset();

            }, 2500);

        });

    }

    /* ==========================================
       HERO INTRO ANIMATION
    ========================================== */

    setTimeout(() => {

        document
            .querySelectorAll(".hero .reveal")
            .forEach((element, index) => {

                setTimeout(() => {

                    element.classList.add("active");

                }, index * 180);

            });

    }, 300);

});

/* ==========================================
   PERFORMANCE
========================================== */

window.addEventListener(
    "touchstart",
    () => {},
    { passive: true }
);
