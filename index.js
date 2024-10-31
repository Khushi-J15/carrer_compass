  // Animate progress bars on scroll
  function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const targetWidth = fill.parentElement.previousElementSibling.lastElementChild.textContent;
        fill.style.width = targetWidth;
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .job-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateProgressBars, 500);
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

// Add hover effect to navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0)';
    });
});