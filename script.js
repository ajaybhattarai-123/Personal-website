// Enhanced JavaScript for Ultra High-Tech Responsive Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initSmoothScrolling();
    initHeaderEffects();
    initScrollAnimations();
    initContactForm();
    initHoverEffects();
    initDynamicBackground();
    initTypewriterEffect();
    initScrollToTop();
    initMobileNavigation();
    initSkillProgressBars();
    initVideoModal();
    initParallaxEffects();
    initThemeSwitcher();
    initPerformanceOptimizations();
});

// Initialize smooth scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (document.body.classList.contains('mobile-menu-open')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Initialize header effects
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        // Header background effect
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(12px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        // Header hide/show on scroll direction
        const scrollY = window.scrollY;
        if (scrollY > 200) { // Only activate after some scrolling
            if (scrollY > lastScrollY) {
                // Scrolling down - hide header
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show header
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = scrollY;
    }, { passive: true });
}

// Initialize scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // If it's a stats element, animate the numbers
                if (entry.target.classList.contains('stat-number')) {
                    animateValue(entry.target, 0, parseInt(entry.target.textContent), 2000);
                }
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // Observe stats for counting animation
    document.querySelectorAll('.stat-number').forEach(stat => {
        observer.observe(stat);
    });
}

// Initialize contact form with enhanced functionality
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Create mailto link
        const subject = encodeURIComponent(data.subject || 'Message from your website');
        const body = encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n\n` +
            `Message:\n${data.message}`
        );
        
        // Simulate network delay for better UX
        setTimeout(() => {
            const mailtoLink = `mailto:ajaybhattarai986@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Initialize enhanced hover effects with GSAP-like smooth animations
function initHoverEffects() {
    // Enhanced hover for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Enhanced hover for video cards with 3D effect
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transform = 'perspective(1000px) translateY(-10px) rotateX(2deg) rotateY(2deg)';
            this.style.boxShadow = '0 25px 50px rgba(16, 185, 129, 0.3)';
            
            // Add subtle glow effect
            const glow = document.createElement('div');
            glow.className = 'card-glow';
            glow.style.position = 'absolute';
            glow.style.top = '0';
            glow.style.left = '0';
            glow.style.width = '100%';
            glow.style.height = '100%';
            glow.style.borderRadius = '15px';
            glow.style.background = 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent 70%)';
            glow.style.pointerEvents = 'none';
            glow.style.zIndex = '-1';
            this.appendChild(glow);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) translateY(0) rotateX(0) rotateY(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            
            // Remove glow effect
            const glow = this.querySelector('.card-glow');
            if (glow) glow.remove();
        });
        
        // Parallax effect on mouse move
        card.addEventListener('mousemove', function(e) {
            if (!this.isAnimating) {
                this.isAnimating = true;
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = (x - centerX) / 25;
                const rotateX = (centerY - y) / 25;
                
                this.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                // Move glow with mouse
                const glow = this.querySelector('.card-glow');
                if (glow) {
                    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(16, 185, 129, 0.15), transparent 70%)`;
                }
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, 50);
            }
        });
    });

    // Enhanced hover for skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.08)';
            this.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(236, 72, 153, 0.3)';
        });
    });

    // Enhanced hover for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// Initialize dynamic background with particles
function initDynamicBackground() {
    // Only add particles on desktop for performance
    if (window.innerWidth > 768) {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-1';
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Create particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = `rgba(16, 185, 129, ${Math.random() * 0.3 + 0.1})`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Initialize particles
        function initParticles() {
            particles = [];
            const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Connect particles with lines
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(16, 185, 129, ${0.1 * (1 - distance/100)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        initParticles();
        animate();
    }
}

// Initialize typewriter effect for hero section
function initTypewriterEffect() {
    const tagline = document.querySelector('.hero .tagline');
    if (!tagline) return;
    
    const originalText = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    const speed = 50; // typing speed in milliseconds
    
    function typeWriter() {
        if (i < originalText.length) {
            tagline.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// Initialize scroll to top button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    // Toggle button visibility
    function toggleScrollButton() {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', toggleScrollButton);
    toggleScrollButton(); // Initial check
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize mobile navigation
function initMobileNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    nav.appendChild(menuBtn);
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        document.body.classList.toggle('mobile-menu-open');
        navLinks.classList.toggle('active');
        menuBtn.innerHTML = document.body.classList.contains('mobile-menu-open') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    }
    
    menuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (document.body.classList.contains('mobile-menu-open') && 
            !nav.contains(e.target) && 
            !e.target.closest('.nav-links')) {
            toggleMobileMenu();
        }
    });
    
    // Update navigation on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && document.body.classList.contains('mobile-menu-open')) {
            toggleMobileMenu();
        }
    });
}

// Initialize animated skill progress bars
function initSkillProgressBars() {
    // Create progress bars for skills
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        const skills = category.querySelectorAll('.skill-tag');
        const progressContainer = document.createElement('div');
        progressContainer.className = 'skill-progress-container';
        
        skills.forEach(skill => {
            const skillText = skill.textContent;
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress';
            
            const progressFill = document.createElement('div');
            progressFill.className = 'skill-progress-fill';
            progressFill.setAttribute('data-skill', skillText);
            
            const progressText = document.createElement('span');
            progressText.className = 'skill-progress-text';
            progressText.textContent = skillText;
            
            progressBar.appendChild(progressFill);
            progressBar.appendChild(progressText);
            progressContainer.appendChild(progressBar);
            
            // Remove original skill tag
            skill.remove();
        });
        
        category.appendChild(progressContainer);
    });
    
    // Animate progress bars when in view
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFills = entry.target.querySelectorAll('.skill-progress-fill');
                
                progressFills.forEach(fill => {
                    // Set random width between 70-100% for demonstration
                    const width = Math.floor(Math.random() * 31) + 70;
                    fill.style.width = `${width}%`;
                    
                    // Add data attribute for percentage
                    fill.setAttribute('data-progress', `${width}%`);
                });
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-category').forEach(category => {
        progressObserver.observe(category);
    });
}

// Initialize video modal functionality
function initVideoModal() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) return;
            
            const title = card.querySelector('h3').textContent;
            const videoId = card.getAttribute('data-video-id') || ''; // You would need to add this attribute
            
            // For demo purposes, we'll just show a message
            showNotification(`Would open video: ${title}`, 'info');
        });
    });
}

// Initialize parallax effects
function initParallaxEffects() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroSection.style.backgroundPosition = `center ${rate}px`;
    }, { passive: true });
}

// Initialize theme switcher
function initThemeSwitcher() {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-switcher';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.setAttribute('aria-label', 'Toggle dark mode');
    document.querySelector('.nav').appendChild(themeBtn);
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle theme
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

// Initialize performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Code that needs to run after resize is complete
        }, 250);
    });
}

// Helper function to animate values (for counters)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Format number with + if needed
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = end >= 1000 ? `${(value/1000).toFixed(1)}K+` : `${value}+`;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Helper function to show notifications
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '6px';
    notification.style.color = 'white';
    notification.style.zIndex = '10000';
    notification.style.fontWeight = '500';
    notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6'
    };
    
    notification.style.background = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}