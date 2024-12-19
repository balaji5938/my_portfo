// Navigation Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Tab Switching Logic
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tabcontent");
    const tabLinks = document.getElementsByClassName("tablinks");

    for (let content of tabContents) {
        content.classList.remove("active");
    }

    for (let link of tabLinks) {
        link.classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Show or hide the button based on scroll position
window.onscroll = function () {
    toggleBackToTopButton();
};

function toggleBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll smoothly back to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
}