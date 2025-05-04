// Navigation



const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


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
