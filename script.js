function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}

// Add this to your existing script.js

// Get all section elements
var sections = document.querySelectorAll('section');

// Get all navigation links
var navLinks = document.querySelectorAll('.navigation a');

// Add a scroll event listener
window.addEventListener('scroll', function () {
    var currentSection = "";

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Update navigation indicators
    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        var targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});