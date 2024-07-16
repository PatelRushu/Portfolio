// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav ul li');

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav ul').classList.remove('nav-open');
    });
});
