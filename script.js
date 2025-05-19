// // Loading Screen
// window.addEventListener('load', () => {
//     const loadingScreen = document.querySelector('.loading-screen');
//     setTimeout(() => {
//         loadingScreen.style.opacity = '0';
//         setTimeout(() => {
//             loadingScreen.style.display = 'none';
//         }, 500);
//     }, 1500);
// });

// // Navbar Scroll Effect
// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Typing Animation
// const typedTextSpan = document.querySelector('.typed-text');
// const textArray = ['Flutter Developer', 'Mobile App Developer', 'Front-End Developer'];
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, 100);
//     } else {
//         setTimeout(erase, 2000);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, 50);
//     } else {
//         textArrayIndex++;
//         if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//         setTimeout(type, 500);
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(type, 1000);
    
//     // Initialize stats counter
//     const statValues = document.querySelectorAll('.stat-value');
//     statValues.forEach(stat => {
//         const target = parseInt(stat.getAttribute('data-value'));
//         let count = 0;
//         const interval = setInterval(() => {
//             if (count < target) {
//                 count++;
//                 stat.textContent = count;
//             } else {
//                 clearInterval(interval);
//             }
//         }, 100);
//     });
// });

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Project Filtering
// const filterButtons = document.querySelectorAll('.filter-btn');
// const projectCards = document.querySelectorAll('.project-card');

// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Remove active class from all buttons
//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         // Add active class to clicked button
//         button.classList.add('active');
        
//         const filterValue = button.getAttribute('data-filter');
        
//         projectCards.forEach(card => {
//             const categories = card.getAttribute('data-category').split(' ');
//             if (filterValue === 'all' || categories.includes(filterValue)) {
//                 card.style.display = 'block';
//                 setTimeout(() => {
//                     card.style.opacity = '1';
//                     card.style.transform = 'scale(1)';
//                 }, 200);
//             } else {
//                 card.style.opacity = '0';
//                 card.style.transform = 'scale(0.8)';
//                 setTimeout(() => {
//                     card.style.display = 'none';
//                 }, 200);
//             }
//         });
//     });
// });

// // Skills Progress Animation
// const skillBars = document.querySelectorAll('.progress-bar');

// const animateSkills = () => {
//     skillBars.forEach(bar => {
//         const width = bar.getAttribute('data-width');
//         bar.style.width = width;
//     });
// };

// // Intersection Observer for Skills Animation
// const skillsSection = document.querySelector('.skills');
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateSkills();
//         }
//     });
// }, { threshold: 0.5 });

// observer.observe(skillsSection);

// // Certification Slider
// const certSlider = document.querySelector('.cert-slider');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const slideWidth = 300 + 24; // card width + gap

// let currentPosition = 0;

// nextBtn.addEventListener('click', () => {
//     currentPosition -= slideWidth;
//     const maxScroll = -(certSlider.scrollWidth - certSlider.clientWidth);
    
//     if (currentPosition < maxScroll) {
//         currentPosition = maxScroll;
//     }
    
//     certSlider.style.transform = `translateX(${currentPosition}px)`;
//     updateSliderButtons();
// });

// prevBtn.addEventListener('click', () => {
//     currentPosition += slideWidth;
    
//     if (currentPosition > 0) {
//         currentPosition = 0;
//     }
    
//     certSlider.style.transform = `translateX(${currentPosition}px)`;
//     updateSliderButtons();
// });

// function updateSliderButtons() {
//     prevBtn.disabled = currentPosition >= 0;
//     nextBtn.disabled = currentPosition <= -(certSlider.scrollWidth - certSlider.clientWidth);
// }

// // Contact Form Validation
// const contactForm = document.getElementById('contactForm');

// if (contactForm) {
//     contactForm.addEventListener('submit', (e) => {
//         e.preventDefault();
        
//         const formData = new FormData(contactForm);
//         const data = Object.fromEntries(formData);
        
//         // Basic validation
//         let isValid = true;
//         for (let [key, value] of Object.entries(data)) {
//             if (!value.trim()) {
//                 isValid = false;
//                 const input = contactForm.querySelector(`[name="${key}"]`);
//                 input.style.borderColor = 'var(--error-color)';
//             }
//         }
        
//         if (isValid) {
//             // Here you would typically send the form data to a server
//             alert('Message sent successfully!');
//             contactForm.reset();
//         }
//     });

//     // Reset form field styling on input
//     contactForm.querySelectorAll('input, textarea').forEach(input => {
//         input.addEventListener('input', () => {
//             input.style.borderColor = '';
//         });
//     });
// }

// // Mobile Navigation
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// if (hamburger) {
//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         hamburger.classList.toggle('active');
//     });
// }

// // Close mobile menu when clicking on a link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//             hamburger.classList.remove('active');
//         }
//     });
// });





// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Start animations after loading screen disappears
            animateOnScroll();
        }, 500);
    }, 1500);
});

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.querySelector('.fa-sun').style.display = 'block';
    themeToggle.querySelector('.fa-moon').style.display = 'none';
} else {
    themeToggle.querySelector('.fa-sun').style.display = 'none';
    themeToggle.querySelector('.fa-moon').style.display = 'block';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.querySelector('.fa-sun').style.display = 'block';
        themeToggle.querySelector('.fa-moon').style.display = 'none';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('.fa-sun').style.display = 'none';
        themeToggle.querySelector('.fa-moon').style.display = 'block';
    }
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// // Mobile Menu Toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navLinks.classList.toggle('active');
// });

// // Close mobile menu when clicking a link
// document.querySelectorAll('.nav-links a').forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         navLinks.classList.remove('active');
//     });
// });

// Typing Animation
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Flutter Developer', 'UI/UX Designer', 'Mobile App Developer'];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 200);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 200);
            }
        });
    });
});

// Skills Progress Animation
const skillBars = document.querySelectorAll('.progress-bar');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
};

// Stats Counter Animation
const statValues = document.querySelectorAll('.stat-value');

const animateStats = () => {
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-value'));
        let count = 0;
        const duration = 2000; // 2 seconds
        const interval = duration / target;
        
        const counter = setInterval(() => {
            count++;
            stat.textContent = count;
            
            if (count >= target) {
                clearInterval(counter);
            }
        }, interval);
    });
};

// Intersection Observer for Animations
const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                             // Animate skills if skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                
                // Animate stats if about section is visible
                if (entry.target.id === 'about') {
                    animateStats();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
};

// Certification Slider
const certSlider = document.querySelector('.cert-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = 300 + 24; // card width + gap

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
    currentPosition -= slideWidth;
    const maxScroll = -(certSlider.scrollWidth - certSlider.clientWidth);
    
    if (currentPosition < maxScroll) {
        currentPosition = maxScroll;
    }
    
    certSlider.style.transform = `translateX(${currentPosition}px)`;
    updateSliderButtons();
});

prevBtn.addEventListener('click', () => {
    currentPosition += slideWidth;
    
    if (currentPosition > 0) {
        currentPosition = 0;
    }
    
    certSlider.style.transform = `translateX(${currentPosition}px)`;
    updateSliderButtons();
});

function updateSliderButtons() {
    prevBtn.disabled = currentPosition >= 0;
    nextBtn.disabled = currentPosition <= -(certSlider.scrollWidth - certSlider.clientWidth);
}

// Initialize slider buttons state
window.addEventListener('load', updateSliderButtons);
window.addEventListener('resize', updateSliderButtons);

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic validation
    let isValid = true;
    const formData = new FormData(contactForm);
    const formEntries = Object.fromEntries(formData);
    
    for (let [key, value] of Object.entries(formEntries)) {
        const input = contactForm.querySelector(`[name="${key}"]`);
        if (!value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--error-color)';
        } else {
            input.style.borderColor = 'var(--border-color)';
        }
    }
    
    if (!isValid) {
        formStatus.textContent = 'Please fill in all fields.';
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
        return;
    }
    
    // Submit form if valid
    try {
        const submitButton = contactForm.querySelector('.submit-btn');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        // If using Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        const result = await response.json();
        
        if (result.ok) {
            formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
        formStatus.className = 'form-status error';
    } finally {
        formStatus.style.display = 'block';
        const submitButton = contactForm.querySelector('.submit-btn');
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Reset form field styling on input
contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
        input.style.borderColor = 'var(--border-color)';
        formStatus.style.display = 'none';
    });
});

// Color Theme Selector
const colorOptions = document.querySelectorAll('.color-option');
const root = document.documentElement;

// Define color themes
const colorThemes = {
    blue: {
        primary: '#2196f3',
        primaryDark: '#0d47a1',
        primaryLight: '#bbdefb',
        secondary: '#00b0ff',
        accent: '#ff6d00'
    },
    green: {
        primary: '#4caf50',
        primaryDark: '#2e7d32',
        primaryLight: '#c8e6c9',
        secondary: '#00c853',
        accent: '#ff6d00'
    },
    purple: {
        primary: '#673ab7',
        primaryDark: '#4527a0',
        primaryLight: '#d1c4e9',
        secondary: '#7c4dff',
        accent: '#ffc107'
    },
    pink: {
        primary: '#e91e63',
        primaryDark: '#c2185b',
        primaryLight: '#f8bbd0',
        secondary: '#ff4081',
        accent: '#03a9f4'
    },
    orange: {
        primary: '#ff5722',
        primaryDark: '#e64a19',
        primaryLight: '#ffccbc',
        secondary: '#ff9800',
        accent: '#2196f3'
    }
};

// Check for saved color theme
const savedTheme = localStorage.getItem('colorTheme');
if (savedTheme && colorThemes[savedTheme]) {
    applyColorTheme(colorThemes[savedTheme]);
    
    // Update current color indicator
    document.querySelector('.color-circle').style.backgroundColor = colorThemes[savedTheme].primary;
}

colorOptions.forEach(option => {
    const theme = option.getAttribute('data-theme');
    
    // Set the background color of each option
    if (colorThemes[theme]) {
        option.style.backgroundColor = colorThemes[theme].primary;
    }
    
    option.addEventListener('click', () => {
        if (colorThemes[theme]) {
            applyColorTheme(colorThemes[theme]);
            localStorage.setItem('colorTheme', theme);
            
            // Update current color indicator
            document.querySelector('.color-circle').style.backgroundColor = colorThemes[theme].primary;
        }
    });
});

function applyColorTheme(theme) {
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--primary-light', theme.primaryLight);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Start animations if page is already loaded (no loading screen)
    if (!document.querySelector('.loading-screen') || 
        document.querySelector('.loading-screen').style.display === 'none') {
        animateOnScroll();
    }
    
    // Initialize slider
    updateSliderButtons();
});


// Phone UI Navigation
const navItems = document.querySelectorAll('.nav-item');
const appScreens = document.querySelectorAll('.app-screen');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all nav items and screens
        navItems.forEach(navItem => navItem.classList.remove('active'));
        appScreens.forEach(screen => screen.classList.remove('active'));
        
        // Add active class to clicked nav item
        item.classList.add('active');
        
        // Show corresponding screen
        const screenId = item.getAttribute('data-screen');
        document.getElementById(screenId).classList.add('active');
    });
});

// Phone Theme Options
const themeOptions = document.querySelectorAll('.theme-option');

// Set active theme option based on current theme
const currentThemeMode = localStorage.getItem('theme') || 'light';
themeOptions.forEach(option => {
    if (option.getAttribute('data-theme') === currentThemeMode) {
        option.classList.add('active');
    }
    
    option.addEventListener('click', () => {
        // Remove active class from all options
        themeOptions.forEach(opt => opt.classList.remove('active'));
        
        // Add active class to clicked option
        option.classList.add('active');
        
        // Apply theme
        const theme = option.getAttribute('data-theme');
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            
            // Sync with main theme toggle
            const themeToggle = document.querySelector('.theme-toggle');
            themeToggle.querySelector('.fa-sun').style.display = 'block';
            themeToggle.querySelector('.fa-moon').style.display = 'none';
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            
            // Sync with main theme toggle
            const themeToggle = document.querySelector('.theme-toggle');
            themeToggle.querySelector('.fa-sun').style.display = 'none';
            themeToggle.querySelector('.fa-moon').style.display = 'block';
        }
    });
});


// Phone Color Options
const phoneColorOptions = document.querySelectorAll('.phone-color-option');

// Set active color option based on current theme
const currentTheme = localStorage.getItem('colorTheme') || 'blue';
phoneColorOptions.forEach(option => {
    if (option.getAttribute('data-theme') === currentTheme) {
        option.classList.add('active');
    }
    
    option.addEventListener('click', () => {
        // Remove active class from all options
        phoneColorOptions.forEach(opt => opt.classList.remove('active'));
        
        // Add active class to clicked option
        option.classList.add('active');
        
        // Apply color theme
        const theme = option.getAttribute('data-theme');
        if (colorThemes[theme]) {
            applyColorTheme(colorThemes[theme]);
            localStorage.setItem('colorTheme', theme);
            
            // Update current color indicator in main UI
            document.querySelector('.color-circle').style.backgroundColor = colorThemes[theme].primary;
        }
    });
});

// Make both Download CV buttons work
document.querySelectorAll('.download-btn, .phone-download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual CV file path
        const cvUrl = 'assets/NousherMurtaza_CV.pdf';
        
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'NousherMurtaza_CV.pdf';
        
        // Append to body, click and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});


// Phone UI Content Responsiveness
function adjustPhoneUIContent() {
    const device = document.querySelector('.device');
    const appUI = document.querySelector('.app-ui');
    
    if (device && appUI) {
        // Calculate base font size based on device width
        const deviceWidth = device.offsetWidth;
        const baseFontSize = Math.max(10, Math.min(14, deviceWidth / 20));
        
        // Apply calculated font size
        appUI.style.fontSize = `${baseFontSize}px`;
        
        // Adjust profile image wrapper size
        const profileWrapper = document.querySelector('.profile-image-wrapper');
        if (profileWrapper) {
            const wrapperSize = Math.max(100, Math.min(160, deviceWidth * 0.45));
            profileWrapper.style.width = `${wrapperSize}px`;
            profileWrapper.style.height = `${wrapperSize}px`;
        }
        
        // Adjust download button padding
        const downloadBtn = document.querySelector('.phone-download-btn');
        if (downloadBtn) {
            const btnPadding = Math.max(8, Math.min(12, deviceWidth * 0.04));
            downloadBtn.style.padding = `${btnPadding}px ${btnPadding * 1.5}px`;
        }
    }
}

// Run on load, resize, and orientation change
window.addEventListener('load', adjustPhoneUIContent);
window.addEventListener('resize', adjustPhoneUIContent);
window.addEventListener('orientationchange', adjustPhoneUIContent);

// Also run when the device element is fully rendered
document.addEventListener('DOMContentLoaded', () => {
    // Initial adjustment
    adjustPhoneUIContent();
    
    // Set up a mutation observer to detect changes to the device element
    const deviceElement = document.querySelector('.device');
    if (deviceElement) {
        const observer = new MutationObserver(adjustPhoneUIContent);
        observer.observe(deviceElement, { attributes: true, childList: true, subtree: true });
    }
});
