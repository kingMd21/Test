document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const modelCards = document.querySelectorAll('.model-card');

    modelCards.forEach(card => {
        const modelImage = card.querySelector('.model-image');

        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseout', () => {
            if (!modelImage.classList.contains('flipped')) {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }
        });

        modelImage.addEventListener('click', (e) => {
            e.stopPropagation();
            if (modelImage.classList.contains('flipped')) {
                modelImage.classList.remove('flipped');
            } else {
                modelImage.classList.add('flipped');
            }
        });

        document.addEventListener('click', (e) => {
            if (!card.contains(e.target) && modelImage.classList.contains('flipped')) {
                modelImage.classList.remove('flipped');
            }
        });
    });

    // Ensure the nav bar logo image does not interfere with the other images
    const logoImage = document.querySelector('.logo-img');
    if (logoImage) {
        logoImage.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});
