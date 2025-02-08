document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const animateSections = () => {
        const sections = document.querySelectorAll('.animated-section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
            }
        });
    };

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize animations
    window.addEventListener('scroll', animateSections);
    animateSections();
});
