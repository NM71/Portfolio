// ===== MOBILE PORTFOLIO INTERACTIVE FUNCTIONALITY =====

class MobilePortfolio {
    constructor() {
        this.currentScreen = 'home';
        this.screens = ['home', 'qualifications', 'skills', 'projects', 'certifications'];
        this.init();
    }

    init() {
        this.bindEvents();
        this.animateStats();
        this.updateTime();
        this.showScreen('home');
    }

    bindEvents() {
        // Bottom navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const screen = item.getAttribute('data-screen');
                if (screen) {
                    this.navigateTo(screen);
                }
            });
        });

        // Back buttons
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.goToScreen('home');
            });
        });

        // Note: Quick links and main action buttons use HTML onclick attributes
        // No additional JavaScript event listeners needed to avoid conflicts

        // Add touch/swipe support for mobile
        this.addTouchSupport();

        // Update time every minute
        setInterval(() => this.updateTime(), 60000);
    }

    navigateTo(screenName) {
        if (!this.screens.includes(screenName) || this.currentScreen === screenName) return;

        // Add haptic feedback for navigation
        simulateHapticFeedback('medium');

        // Get current and target screen elements
        const currentScreenEl = document.getElementById(`${this.currentScreen}-screen`);
        const targetScreenEl = document.getElementById(`${screenName}-screen`);

        if (!targetScreenEl) return;

        // Prepare target screen for fade transition
        targetScreenEl.style.opacity = '0';
        targetScreenEl.style.visibility = 'visible';
        targetScreenEl.style.zIndex = '3';

        // Start fade transition
        requestAnimationFrame(() => {
            // Fade out current screen
            if (currentScreenEl) {
                currentScreenEl.style.opacity = '0';
            }

            // Fade in target screen
            targetScreenEl.style.opacity = '1';

            // Update navigation active state
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });

            const navItem = document.querySelector(`[data-screen="${screenName}"]`);
            if (navItem) {
                navItem.classList.add('active');
            }

            // Complete transition
            setTimeout(() => {
                if (currentScreenEl) {
                    currentScreenEl.classList.remove('active');
                    currentScreenEl.style.opacity = '';
                    currentScreenEl.style.zIndex = '';
                }

                targetScreenEl.classList.add('active');
                targetScreenEl.style.zIndex = '';

                this.currentScreen = screenName;
                // Removed animateScreenContent for authentic mobile app feel
            }, 300);
        });
    }

    showScreen(screenName) {
        // This method is now handled by navigateTo
        const screenEl = document.getElementById(`${screenName}-screen`);
        if (screenEl && !screenEl.classList.contains('active')) {
            screenEl.classList.add('active');
            this.animateScreenContent(screenName);
        }
    }

    animateScreenContent(screenName) {
        // Add staggered animations to content
        const screenEl = document.getElementById(`${screenName}-screen`);
        if (!screenEl) return;

        const cards = screenEl.querySelectorAll('.section-card, .project-card, .cert-card, .stat-card, .action-btn');

        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.4s ease-out';

            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const start = performance.now();
            const startValue = 0;

            const animate = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);

                stat.textContent = currentValue;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    stat.textContent = target;
                }
            };

            // Start animation when element comes into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(animate);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(stat);
        });
    }

    updateTime() {
        const timeEl = document.querySelector('.time');
        if (timeEl) {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            timeEl.textContent = `${hours}:${minutes}`;
        }
    }

    addTouchSupport() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;
        let isPulling = false;
        let pullDistance = 0;

        const appContainer = document.querySelector('.app-container');
        const activeScreen = () => document.querySelector('.app-screen.active');

        // Touch start
        appContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isPulling = false;
            pullDistance = 0;
        });

        // Touch move for pull-to-refresh
        appContainer.addEventListener('touchmove', (e) => {
            if (!activeScreen()) return;

            const currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;

            // Only handle pull-to-refresh if at top of scroll
            if (activeScreen().scrollTop === 0 && deltaY > 0 && !isPulling) {
                isPulling = true;
                e.preventDefault();
            }

            if (isPulling) {
                pullDistance = Math.min(deltaY * 0.5, 100); // Limit pull distance
                activeScreen().style.transform = `translateY(${pullDistance}px)`;
                e.preventDefault();
            }
        });

        // Touch end
        appContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;

            // Handle pull-to-refresh
            if (isPulling && pullDistance > 50) {
                this.handlePullToRefresh();
            } else if (isPulling) {
                // Reset position if not pulled far enough
                activeScreen().style.transform = '';
            }

            // Handle swipe gestures
            this.handleSwipe(startX, startY, endX, endY);

            isPulling = false;
        });
    }

    handlePullToRefresh() {
        const activeScreen = document.querySelector('.app-screen.active');
        if (!activeScreen) return;

        // Add refresh animation
        simulateHapticFeedback('medium');

        // Show loading indicator
        const refreshIndicator = document.createElement('div');
        refreshIndicator.className = 'refresh-indicator';
        refreshIndicator.innerHTML = '<i class="fas fa-sync-alt"></i> Refreshing...';
        activeScreen.appendChild(refreshIndicator);

        // Animate refresh
        setTimeout(() => {
            activeScreen.style.transform = '';
            refreshIndicator.remove();

            // Re-animate stats or content
            if (this.currentScreen === 'home') {
                this.animateStats();
            }

            // Show success feedback
            this.showRefreshSuccess();
        }, 1500);
    }

    showRefreshSuccess() {
        // Create success toast
        const toast = document.createElement('div');
        toast.className = 'toast success';
        toast.innerHTML = '<i class="fas fa-check"></i> Updated!';
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 2000);
    }

    handleSwipe(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;

        // Only handle horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
            const currentIndex = this.screens.indexOf(this.currentScreen);

            if (deltaX > 0 && currentIndex > 0) {
                // Swipe right - go to previous screen
                this.navigateTo(this.screens[currentIndex - 1]);
            } else if (deltaX < 0 && currentIndex < this.screens.length - 1) {
                // Swipe left - go to next screen
                this.navigateTo(this.screens[currentIndex + 1]);
            }
        }
    }

    // Utility function for navigation (called from HTML onclick)
    goToScreen(screenName) {
        this.navigateTo(screenName);
    }
}

// ===== SKILL BAR ANIMATIONS =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';

                setTimeout(() => {
                    bar.style.width = width;
                }, 200);

                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// ===== HAPTIC FEEDBACK SIMULATION =====
function simulateHapticFeedback(intensity = 'light') {
    // Create vibration-like effect using CSS animations
    const device = document.querySelector('.mobile-device');
    if (!device) return;

    const intensities = {
        light: { duration: 50, scale: 0.98 },
        medium: { duration: 100, scale: 0.96 },
        heavy: { duration: 150, scale: 0.94 }
    };

    const config = intensities[intensity] || intensities.light;

    device.style.transition = `transform ${config.duration}ms cubic-bezier(0.4, 0, 0.6, 1)`;
    device.style.transform = `scale(${config.scale})`;

    setTimeout(() => {
        device.style.transform = '';
        setTimeout(() => {
            device.style.transition = '';
        }, config.duration);
    }, config.duration);
}

// ===== ENHANCED RIPPLE EFFECT =====
function addRippleEffect() {
    document.querySelectorAll('.action-btn, .nav-item, .back-btn, .stat-card, .project-card, .cert-card').forEach(button => {
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            simulateHapticFeedback('light');
        });

        button.addEventListener('click', function(e) {
            // Prevent multiple ripples
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) return;

            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 1.5;
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
                z-index: 10;
            `;

            this.style.position = 'relative';
            this.appendChild(ripple);

            // Add haptic feedback
            simulateHapticFeedback('light');

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation keyframes via CSS
const rippleStyles = `
@keyframes ripple-animation {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}

.ripple {
    animation: ripple-animation 0.6s ease-out;
}
`;

// Inject ripple styles
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleStyles;
document.head.appendChild(styleSheet);

// ===== LOADING ANIMATION =====
function showLoadingAnimation() {
    const device = document.querySelector('.mobile-device');
    device.classList.add('loading');

    setTimeout(() => {
        device.classList.remove('loading');
    }, 1000);
}

// ===== THEME SUPPORT =====
function initThemeSupport() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('mobile-portfolio-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Add theme toggle if needed (could be added to settings later)
    // For now, just support system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark && !localStorage.getItem('mobile-portfolio-theme')) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Debounce scroll events
    let scrollTimeout;
    const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based animations if needed
        }, 16);
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
}

// ===== MODE SWITCHING FUNCTIONALITY =====
function initModeSwitching() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    const body = document.body;
    const deviceFrame = document.getElementById('device-frame');

    modeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mode = button.getAttribute('data-mode');

            // Remove all mode classes
            body.classList.remove('phone-mode', 'tablet-mode', 'desktop-mode');

            // Remove active class from all buttons
            modeButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Add appropriate mode class to body
            if (mode === 'phone') {
                body.classList.add('phone-mode');
            } else if (mode === 'tablet') {
                body.classList.add('tablet-mode');
            } else if (mode === 'desktop') {
                body.classList.add('desktop-mode');
            }

            // Add haptic feedback
            simulateHapticFeedback('light');

            // Smooth transition effect
            deviceFrame.style.transform = 'scale(0.95)';
            setTimeout(() => {
                deviceFrame.style.transform = '';
            }, 150);
        });
    });

    // Set default mode to phone
    body.classList.add('phone-mode');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the mobile portfolio
    const portfolio = new MobilePortfolio();

    // Initialize mode switching
    initModeSwitching();

    // Initialize additional features
    animateSkillBars();
    addRippleEffect();
    initThemeSupport();
    optimizePerformance();

    // Show loading animation on page load
    showLoadingAnimation();

    // Make portfolio instance globally available for HTML onclick handlers
    window.portfolio = portfolio;
});

// ===== GLOBAL NAVIGATION FUNCTION =====
function navigateTo(screenName) {
    if (window.portfolio) {
        window.portfolio.goToScreen(screenName);
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Mobile Portfolio Error:', e.error);
    // Could show user-friendly error message
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Mobile Portfolio Unhandled Promise Rejection:', e.reason);
    // Could show user-friendly error message
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
document.addEventListener('keydown', (e) => {
    // Keyboard navigation support
    if (e.key === 'Escape') {
        // Go back to home screen
        if (window.portfolio && window.portfolio.currentScreen !== 'home') {
            window.portfolio.navigateTo('home');
        }
    }
});

// ===== SERVICE WORKER REGISTRATION (for PWA support) =====
// Uncomment and configure if you want PWA features
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    });
}
*/
