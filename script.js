document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    }

    const scrollToTopButton = document.querySelector('.scroll-to-top-button');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            scrollToTopButton.style.opacity = 1;
            scrollToTopButton.style.pointerEvents = 'auto';
        } else {
            scrollToTopButton.style.opacity = 0;
            scrollToTopButton.style.pointerEvents = 'none';
        }

        const navbar = document.querySelector('header');
        navbar.style.opacity = 1 - window.pageYOffset / 300;
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
