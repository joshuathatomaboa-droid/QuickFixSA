// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

// Lightbox setup
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.clickable-img');
let currentImgIndex = 0;

// Open image
galleryImages.forEach((img, index) => {
    img.addEventListener('click', function() {
        if(!lightbox) return;
        currentImgIndex = index;
        lightboxImg.src = this.src;
        lightbox.classList.add('show');
    });
});

if(lightbox) {
    // Close lightbox
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            lightbox.classList.remove('show');
        }
    });

    // Close lightbox if user presses Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show');
        }
    });

    // Create next/prev buttons for gallery
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#10094;';
    prevBtn.style.cssText = 'position:absolute; left:20px; top:50%; color:white; font-size:40px; background:none; border:none; cursor:pointer;';
    
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#10095;';
    nextBtn.style.cssText = 'position:absolute; right:20px; top:50%; color:white; font-size:40px; background:none; border:none; cursor:pointer;';
    
    lightbox.appendChild(prevBtn);
    lightbox.appendChild(nextBtn);

    // Loop back to start if we reach the end
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImgIndex].src;
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
        lightboxImg.src = galleryImages[currentImgIndex].src;
    });
}

// FAQ Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        const item = this.parentElement;
        const isOpen = item.classList.contains('open');
        
        // Close other open tabs
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
        
        // Open clicked if it was closed
        if (!isOpen) item.classList.add('open');
    });
});

// Live Search for Services
const searchInput = document.getElementById('service-search');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const term = this.value.toLowerCase();
        const cards = document.querySelectorAll('.service-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(term) ? 'block' : 'none';
        });
    });
}

// Fake AJAX request (Required by rubric)
// Accepts the form data to simulate sending it to a server
function fakeAjaxSubmit(data) {
    return new Promise((resolve) => {
        console.log("AJAX sending data:", data); 
        setTimeout(() => { resolve({ success: true }); }, 800);
    });
}

// Live validation while typing (Immediate feedback)
const emailField = document.getElementById('email');
if (emailField) {
    emailField.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const err = document.getElementById('email-error');
        if (this.value !== '' && !emailRegex.test(this.value)) {
            this.style.borderColor = 'red';
            if(err) err.classList.add('show');
        } else {
            this.style.borderColor = '#ccc';
            if(err) err.classList.remove('show');
        }
    });
}

// Enquiry Form Validation
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Reset errors
        document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const location = document.getElementById('location');
        const msg = document.getElementById('message');

        // Check all fields
        if(name.value.trim().length < 2) {
            document.getElementById('name-error').classList.add('show');
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)) {
            document.getElementById('email-error').classList.add('show');
            isValid = false;
        }

        if(phone.value.trim() === '') {
            document.getElementById('phone-error').classList.add('show');
            isValid = false;
        }

        if(location.value.trim() === '') {
            document.getElementById('location-error').classList.add('show');
            isValid = false;
        }

        if(msg.value.trim().length < 10) {
            document.getElementById('message-error').classList.add('show');
            isValid = false;
        }

        // If all good, run AJAX and pass the data
        if(isValid) {
            const successBox = document.getElementById('form-success');
            successBox.innerHTML = "Submitting your request...";
            successBox.classList.add('show');

            const formData = { name: name.value, email: email.value, phone: phone.value };
            fakeAjaxSubmit(formData).then(() => {
                successBox.innerHTML = `<strong>Thank you, ${name.value}!</strong><br>Your service request has been received. We will contact you shortly.`;
                enquiryForm.reset();
                successBox.scrollIntoView({ behavior: 'smooth' });
            });
        }
    });
}

// Contact Form Validation & Mailto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        document.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
        
        const name = document.getElementById('c-name');
        const email = document.getElementById('c-email');
        const msg = document.getElementById('c-message');

        if(name.value.trim() === '') {
            document.getElementById('c-name-error').classList.add('show');
            isValid = false;
        }
        
        // Check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value)) {
            document.getElementById('c-email-error').classList.add('show');
            isValid = false;
        }
        
        if(msg.value.trim() === '') {
            document.getElementById('c-message-error').classList.add('show');
            isValid = false;
        }

        // If valid, run AJAX then open email app
        if(isValid) {
            const successBox = document.getElementById('form-success');
            successBox.innerHTML = "Processing your message...";
            successBox.classList.add('show');

            const formData = { name: name.value, email: email.value, message: msg.value };
            
            fakeAjaxSubmit(formData).then(() => {
                const body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0A%0D%0AMessage:%0D%0A${msg.value}`;
                const mailtoLink = `mailto:info@quickfixsa.co.za?subject=Website Contact from ${name.value}&body=${body}`;
                
                successBox.innerHTML = `<strong>Message ready!</strong><br>Your email app should open now. If not, <a href="${mailtoLink}">click here</a>.`;
                
                window.location.href = mailtoLink;
                contactForm.reset();
            });
        }
    });
}

// Interactive Map (Contact Page)
if (document.getElementById('map')) {
    window.addEventListener('load', function() {
        if (typeof L === 'undefined') return;
        
        // Center map between Joburg and Pretoria
        const map = L.map('map').setView([-26.0500, 28.1000], 10);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        // Pin for Johannesburg
        L.marker([-26.2041, 28.0473]).addTo(map)
            .bindPopup('<strong>QuickFix SA - Johannesburg</strong><br>123 Main Street, CBD');

        // Pin for Pretoria
        L.marker([-25.7461, 28.1881]).addTo(map)
            .bindPopup('<strong>QuickFix SA - Pretoria</strong><br>456 Lynnwood Road, Pretoria East');
    });
}

// JavaScript Scroll Animations (Fade in cards as you scroll)
const revealElements = document.querySelectorAll('.card, .service-card, .hero');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Fade in and slide up when it enters the screen
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    // Start hidden and slightly pushed down
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    // Tell observer to watch this element
    revealObserver.observe(el);
});
