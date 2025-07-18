document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    // Function to update active nav link based on scroll position
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if the current scroll position is within the section
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // --- REVEAL ON SCROLL ANIMATION LOGIC ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // triggers when 10% of the element is visible
    });

    // Observe each element with the 'reveal' class
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});