document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Show footer when scrolled to bottom
    const footer = document.getElementById('footer');
    const footerSpacer = document.getElementById('footer-spacer');

    if (footer && footerSpacer) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;

            if (scrollTop + windowHeight >= documentHeight - footerSpacer.offsetHeight) {
                footer.style.display = 'block';
            } else {
                footer.style.display = 'none';
            }
        });
    }
});
