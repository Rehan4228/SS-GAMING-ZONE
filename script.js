// ===== Loading Screen =====
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2600);
});

// ===== Hamburger Menu =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===== Particle Background =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? '#00d9ff' : '#c700f2';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px ${particle.style.background}`;
        particle.style.animation = `float${Math.random() > 0.5 ? '1' : '2'} ${Math.random() * 8 + 8}s linear infinite`;
        particlesContainer.appendChild(particle);
    }
}

// Add animation styles for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float1 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(30px, 30px); }
    }
    @keyframes float2 {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-30px, -30px); }
    }
`;
document.head.appendChild(style);
createparticles();

// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Button Actions =====
const bookBtn = document.querySelector('[data-action="book"]');
const contactBtn = document.querySelector('[data-action="contact"]');

if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        const phone = '03000009786';
        const message = 'Hello! I want to book a gaming seat at SS Gaming Zone.';
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
    });
}

if (contactBtn) {
    contactBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Send via WhatsApp
        const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        const phone = '03000009786';
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`);

        contactForm.reset();
        alert('Thank you! Your message has been sent via WhatsApp.');
    });
}

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .game-card, .setup-card, .why-us-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Active Navigation Link on Scroll =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Add Active State Styling =====
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: var(--neon-blue);
        text-shadow: 0 0 10px var(--neon-blue);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// ===== Game Card Click Effects =====
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.animation = 'none';
        setTimeout(() => {
            card.style.animation = '';
        }, 10);
    });
});

// ===== Responsive Hamburger Menu Fix =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===== Mobile Navigation Link Styling =====
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px) {
        .nav-link::after {
            display: none;
        }
    }
`;
document.head.appendChild(mobileStyle);
