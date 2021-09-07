const header = document.querySelector('header');
const greetings = document.getElementById('greetings');
const navLinks = document.querySelectorAll('.navbar a');

// INTERSECTION OBSERVER SETUP

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        header.classList.toggle('sticky', !entry.isIntersecting);
    });
}, { threshold: .25 });

observer.observe(greetings);

// NAVLINKS BEHAVIOR

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});