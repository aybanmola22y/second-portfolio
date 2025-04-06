// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for work items animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all work items
    document.querySelectorAll('.work-item').forEach(item => {
        observer.observe(item);
    });

    // Shrink header on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '20px 0';
        }
    });
});