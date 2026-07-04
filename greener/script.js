document.addEventListener('DOMContentLoaded', () => {
    const heroImageWrapper = document.getElementById('heroImageWrapper');

    // small delay so the page settles first, then slides in
    setTimeout(() => {
        heroImageWrapper.classList.add('animate-in');
    }, 200);
});




// ==========================================
    // 2. MOBILE NAVBAR MENU LOGIC
    // ==========================================
    const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
    const menuOpenButton = document.querySelector("#menu-open-button");
    const menuCloseButton = document.querySelector("#menu-close-button");

    if (menuOpenButton) {
        menuOpenButton.addEventListener("click", () => {
            document.body.classList.toggle("show-mobile-menu");
        });
    }

    if (menuCloseButton && menuOpenButton) {
        menuCloseButton.addEventListener("click", () => {
            menuOpenButton.click();
        });
    }

    if (navbarLinks && menuOpenButton) {
        navbarLinks.forEach((link) => {
            link.addEventListener("click", () => {
                menuOpenButton.click();
            });
        });
    }