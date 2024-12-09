// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');
    // Add your JavaScript code here

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    // Filter projects by category
    const projectFilter = document.getElementById('project-filter');
    const projects = document.querySelectorAll('.project-cards article');

    projectFilter.addEventListener('change', function() {
        const selectedCategory = this.value;

        projects.forEach(project => {
            if (selectedCategory === 'all' || project.dataset.category === selectedCategory) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });

    // Lightbox effect for project images with accessibility improvements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const projectImages = document.querySelectorAll('.project-cards img');

    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightbox.setAttribute('aria-hidden', 'false');
            lightbox.focus();
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
            lightbox.setAttribute('aria-hidden', 'true');
        }
    });

    // Ensure close button is focusable
    closeBtn.setAttribute('tabindex', '0');

    // Form validation
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });

    // Custom validation messages
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    nameInput.addEventListener('input', function() {
        if (nameInput.validity.tooShort) {
            nameInput.setCustomValidity('Name must be at least 2 characters long.');
        } else {
            nameInput.setCustomValidity('');
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    commentInput.addEventListener('input', function() {
        if (commentInput.validity.tooShort) {
            commentInput.setCustomValidity('Comment must be at least 10 characters long.');
        } else {
            commentInput.setCustomValidity('');
        }
    });
});