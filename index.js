function main() {
    const header = document.querySelector('header');
    const greetings = document.getElementById('greetings');
    const navbar = document.querySelector('header > nav');
    const navLinks = document.querySelectorAll('header a');
    const burger = document.querySelector('header > .burger');
    
    // INTERSECTION OBSERVER SETUP
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            header.classList.toggle('min', !entry.isIntersecting);
        });
    }, { threshold: .25 });
    
    observer.observe(greetings);
    
    // NAVLINKS BEHAVIOR
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.classList.remove('open');
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // BURGER BUTTON BEHAVIOR

    burger.addEventListener('click', () => {
        navbar.classList.toggle('open');
    });

};

main();