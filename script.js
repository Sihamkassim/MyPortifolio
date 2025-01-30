// Navigation
const navMenu = document.querySelector('.nav-menu');

const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Typing animation for the role text
const roleText = "Frontend Developer";
let index = 0;
const typingSpeed = 100;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    if (index < roleText.length) {
        typingElement.textContent = roleText.slice(0, index + 1);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(() => {
            index = 0;
            typingElement.textContent = '';
            typeText();
        }, 2000);
    }
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    typeText();
});

// Ensure page starts at home section on load
window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Remove any hash from URL without affecting history
    if (window.location.hash) {
        history.replaceState('', document.title, window.location.pathname);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Hide the form
            contactForm.style.display = 'none';
            
            // Show success message
            contactSuccess.classList.remove('hidden');
            
            // Reset form
            this.reset();
            
            // Optional: Hide success message and show form again after some time
            setTimeout(() => {
                contactSuccess.classList.add('hidden');
                contactForm.style.display = 'flex';
            }, 10000); // 10 seconds
        });
    }
});

// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.skill-card, .project-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Animate skill bars when they come into view
const skillSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress');

function showProgress() {
    progressBars.forEach(progress => {
        const value = progress.style.width;
        progress.style.width = '0';
        progress.style.width = value;
    });
}

function hideProgress() {
    progressBars.forEach(progress => {
        progress.style.width = '0';
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

// Typing effect for contact section
document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Let's work together! 👋", "Got a project in mind? 💡", "Need a developer? 👩‍💻"];
    const typingText = document.querySelector('.typing-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500; // Pause before starting new word
        } else {
            typingDelay = isDeleting ? 50 : 100;
        }

        setTimeout(type, typingDelay);
    }

    if (typingText) {
        setTimeout(type, typingDelay);
    }
});

// Copy email function
function copyEmail() {
    const email = 'sihamkasim735@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        const copyButton = document.querySelector('.copy-email');
        copyButton.classList.add('copied');
        setTimeout(() => {
            copyButton.classList.remove('copied');
        }, 2000);
    });
}
