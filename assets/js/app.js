// =======================================================
// WebMart Marketplace JavaScript
// Version 1.0
// =======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================================
    // ELEMENTS
    // ===============================================

    const body = document.body;

    const header = document.querySelector(".site-header");

    const dropdownButton = document.getElementById("categoryToggle");

    const megaMenu = document.getElementById("megaMenu");

    const categorySearch = document.getElementById("categorySearch");

    const categoryLinks = document.querySelectorAll(".category-list a");

    const heroSlider = document.getElementById("heroSlider");



    // ===============================================
    // HERO SLIDER
    // ===============================================

    const slides = [

        {
            title: "Restaurant Deluxe",
            category: "Restaurant",
            color: "#2563EB"
        },

        {
            title: "Luxury Salon",
            category: "Salon",
            color: "#7C3AED"
        },

        {
            title: "Power Gym",
            category: "Gym",
            color: "#059669"
        },

        {
            title: "CareFirst Clinic",
            category: "Clinic",
            color: "#DC2626"
        },

        {
            title: "Yoga Sanctuary",
            category: "Yoga",
            color: "#0891B2"
        }

    ];


    let currentSlide = 0;


    function renderHeroSlide() {

        if (!heroSlider) return;

        const slide = slides[currentSlide];

        heroSlider.innerHTML = `

        <div
        style="
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:linear-gradient(135deg,${slide.color},#111827);
        color:white;
        border-radius:14px;
        transition:.5s;
        ">

            <div style="font-size:14px;opacity:.8">

            LIVE WEBSITE DEMO

            </div>

            <h2 style="margin-top:15px;font-size:32px">

            ${slide.title}

            </h2>

            <p style="opacity:.85">

            ${slide.category}

            </p>

        </div>

        `;

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

    }

    renderHeroSlide();

    setInterval(renderHeroSlide, 3500);



    // ===============================================
    // MEGA MENU
    // ===============================================

    if (dropdownButton) {

        dropdownButton.addEventListener("click", function (e) {

            e.preventDefault();

            e.stopPropagation();

            megaMenu.classList.toggle("show");

            if (megaMenu.classList.contains("show")) {

                categorySearch.focus();

            }

        });

    }



    // ===============================================
    // CLOSE MENU WHEN CLICK OUTSIDE
    // ===============================================

    document.addEventListener("click", function (e) {

        if (!megaMenu.contains(e.target) && !dropdownButton.contains(e.target)) {

            megaMenu.classList.remove("show");

        }

    });



    // ===============================================
    // ESC KEY CLOSE
    // ===============================================

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            megaMenu.classList.remove("show");

        }

    });



    // ===============================================
    // SEARCH CATEGORIES
    // ===============================================

    if (categorySearch) {

        categorySearch.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            categoryLinks.forEach(link => {

                if (link.textContent.toLowerCase().includes(value)) {

                    link.style.display = "flex";

                }

                else {

                    link.style.display = "none";

                }

            });

        });

    }



    // ===============================================
    // CATEGORY CLICK
    // ===============================================

    categoryLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const selectedCategory = this.dataset.category;

            console.log("Selected Category:", selectedCategory);

            megaMenu.classList.remove("show");

            // Future:
            // filterTemplates(selectedCategory);

        });

    });



    // ===============================================
    // STICKY HEADER EFFECT
    // ===============================================

    window.addEventListener("scroll", function () {

        if (window.scrollY > 20) {

            header.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";

        }

        else {

            header.style.boxShadow = "none";

        }

    });



    // ===============================================
    // SMOOTH SCROLL
    // ===============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });



    // ===============================================
    // FUTURE PLACEHOLDERS
    // ===============================================

    function loadTemplates() {

        console.log("Future Template Loader");

    }

    function filterTemplates(category) {

        console.log("Future Filter:", category);

    }

    function loadCategories() {

        console.log("Future Categories");

    }

    function initializeMarketplace() {

        console.log("WebMart Marketplace Ready");

    }

    initializeMarketplace();

});