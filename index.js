document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');

    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const selectMale = document.getElementById('select-male');
    const selectFemale = document.getElementById('select-female');
    const getStarted = document.getElementById('get-started');

    if (selectMale) {
        selectMale.addEventListener('click', () => {
            console.log('Male image clicked');
            window.location.href = 'model.html';
        });
    } else {
        console.log('select-male element not found');
    }

    if (selectFemale) {
        selectFemale.addEventListener('click', () => {
            console.log('Female image clicked');
            window.location.href = 'female.html';
        });
    } else {
        console.log('select-female element not found');
    }

    if (getStarted) {
        getStarted.addEventListener('click', () => {
            console.log('Get Started button clicked');
            window.location.href = 'question.html';
        });
    } else {
        console.log('get-started element not found');
    }
});
