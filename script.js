// Mobile Navigation Toggle Controller
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
    }
});

// Premium Certificate Dynamic Showcase Controller
function updateCertShowcase(imgSrc, title, issuer, capability, strategicUse) {
    // Target key UI elements smoothly
    const featuredImg = document.getElementById('featured-cert-img');
    const metaTitle = document.getElementById('meta-cert-title');
    const metaIssuer = document.getElementById('meta-cert-issuer');
    const metaLevel = document.getElementById('meta-cert-level');
    const metaUse = document.getElementById('meta-cert-use');

    if (featuredImg) {
        // Fade out transition effect
        featuredImg.style.opacity = '0.3';
        
        setTimeout(() => {
            // Apply fresh data updates inside timeout closure
            featuredImg.src = imgSrc;
            if (metaTitle) metaTitle.innerText = title;
            if (metaIssuer) metaIssuer.innerText = issuer;
            if (metaLevel) metaLevel.innerText = capability;
            if (metaUse) metaUse.innerText = strategicUse;
            
            // Re-fade layout back in securely
            featuredImg.style.opacity = '1';
        }, 150);
    }
    
    // Manage dynamic styling classes across selector menu options
    const targetItems = document.querySelectorAll('.selector-item');
    targetItems.forEach(btn => btn.classList.remove('active'));
    
    // Affix current focus layout metrics
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}