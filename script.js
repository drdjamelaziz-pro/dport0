//==================================================
// 1. BACK TO TOP BUTTON
//==================================================


//====================
// DOM Elements
//====================

const backToTop = document.querySelector("#back-to-top");

//====================
// DATA
//====================


//====================
// FUNCTIONS
//====================


//====================
// DOM MANIPULATION
//====================


//====================
// EVENTS
//====================

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



//==================================================
//  MOBILE MENU
//==================================================


//====================
// DOM Elements
//====================

let menuToggle = document.querySelector(".menu-toggle");
let mobileMenu = document.querySelector("nav");
let menuClose = document.querySelector(".menu-close");

let menuLinks = document.querySelectorAll("nav a");


//====================
// DATA
//====================


//====================
// FUNCTIONS
//====================

function closeMenu() {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "";

    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    menuToggle.setAttribute("aria-expanded", "false");
}

function openMenu() {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";

    menuToggle.textContent = "×";
    menuToggle.setAttribute("aria-label", "Fermer le menu");
    menuToggle.setAttribute("aria-expanded", "true");
}


//====================
// DOM MANIPULATION
//====================


//====================
// EVENTS
//====================

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

menuLinks.forEach(function(link) {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMenu();
    }

});



//==================================================
// SERVICES
//==================================================


//====================
// DOM Elements
//====================


//====================
// DATA
//====================


//====================
// FUNCTIONS
//====================


//====================
// DOM MANIPULATION
//====================


//====================
// EVENTS
//====================




//==================================================
// FAQ
//==================================================


//====================
// DOM Elements
//====================


//====================
// DATA
//====================


//====================
// FUNCTIONS
//====================


//====================
// DOM MANIPULATION
//====================


//====================
// EVENTS
//====================




//==================================================
// CONTACT FORM
//==================================================


//====================
// DOM Elements
//====================


//====================
// DATA
//====================


//====================
// FUNCTIONS
//====================


//====================
// DOM MANIPULATION
//====================


//====================
// EVENTS
//====================
