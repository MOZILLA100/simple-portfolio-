//mobile menu bar 
const menubar = document.querySelector('.mobile-bar');
const navilinks = document.querySelector('.nav-links');
let menuopen = true;

menubar.addEventListener('click', () => {
    if (menuopen == true) {
        navilinks.style.display = "block";
        menuopen = false
    }
    else if (menuopen == false) {
        navilinks.style.display = "none";
        menuopen = true
    }
})
 
// Smooth scrolling for navigation links
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

// Active navigation link on scroll
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Form submission
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        });