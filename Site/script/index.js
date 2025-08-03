window.addEventListener('scroll', function() {
    const secondBg = document.querySelector('.second-bg');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    if (secondBg) {
        const sectionTop = secondBg.offsetTop;
        // Fade in as soon as user starts scrolling towards the second section
        const fadeStart = sectionTop - windowHeight * 0.7;
        const fadeEnd = sectionTop - windowHeight * 0.2;
        let opacity = 0;
        if (scrollY > fadeStart) {
            opacity = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
        }
        secondBg.style.opacity = opacity;
    }
});