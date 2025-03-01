document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.nav_dropdown');

    // Toggle menu
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
});



// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects for cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.5s ease';
    });
});



// Footer section 
// Add hover effects for quick links
document.querySelectorAll('.quicklink-item').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
});

// Add lazy loading for temple image
document.addEventListener('DOMContentLoaded', function() {
    const templeImage = document.querySelector('.temple-image');
    if (templeImage) {
        templeImage.loading = 'lazy';
    }
});

// Add smooth scroll for quick links
document.querySelectorAll('.quicklink-item').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});



// seva page
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('.seva-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Optional: Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Optional: Add animation class when items come into view
    const sevaItems = document.querySelectorAll('.seva-item');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    sevaItems.forEach(item => fadeInObserver.observe(item));
});

// history

document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('.card-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Add smooth animation when cards come into view
    const cards = document.querySelectorAll('.history-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });
});


// contact us page = form


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());

        // Validate form
        if (validateForm(formValues)) {
            // Show success message
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        }
    });

    function validateForm(values) {
        // Validate name
        if (!values.name || values.name.trim().length < 2) {
            alert('Please enter a valid name');
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(values.email)) {
            alert('Please enter a valid email address');
            return false;
        }

        // Validate phone
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(values.phone)) {
            alert('Please enter a valid phone number');
            return false;
        }

        // Validate message
        if (!values.message || values.message.trim().length < 10) {
            alert('Please enter a message (minimum 10 characters)');
            return false;
        }

        return true;
    }

    // Optional: Add smooth animations for form submission
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});



// sign up page function

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const googleBtn = document.querySelector('.google-btn');
    const facebookBtn = document.querySelector('.facebook-btn');
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (fullname && email && password) {
            // Show success popup
            popup.style.display = 'flex';
            
            // Reset form
            form.reset();
        }
    });
    
    // Close popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
    
    // Google sign up
    googleBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
        document.querySelector('.popup-message').textContent = 'Signed up with Google successfully!';
    });
    
    // Facebook sign up
    facebookBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
        document.querySelector('.popup-message').textContent = 'Signed up with Facebook successfully!';
    });
});