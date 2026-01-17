// Navigation functionality
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target section
        const targetSection = link.getAttribute('data-section');
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link and target section
        link.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});