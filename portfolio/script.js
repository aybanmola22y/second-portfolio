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

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll animation for work items
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.work-item').forEach(item => {
        observer.observe(item);
    });
});

// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that lead to anchors
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if it's just "#"
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate header height to offset the scroll position
                const headerHeight = document.querySelector('header').offsetHeight;
                
                // Get the position of the target section
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                
                // Calculate the final position with header offset
                const offsetPosition = targetPosition - headerHeight;
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to the clicked link
                this.classList.add('active');
                
                // Smooth scroll to the target position
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight the current section in the navigation menu while scrolling
    window.addEventListener('scroll', function() {
        // Get all sections
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Check each section's position
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
            const sectionId = section.getAttribute('id');
            
            // If the section is in view
            if (window.scrollY >= sectionTop - headerHeight - 100) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to the corresponding link
                const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });
    
    // Smooth appearance animations for sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
