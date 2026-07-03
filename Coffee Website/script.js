
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and ready!");

    // ==========================================
    // 1. FORM SUBMISSION LOGIC
    // ==========================================
    const form = document.getElementById('form');
    
    if (form) {
        const submitBtn = form.querySelector('button[type="submit"]');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            
        
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    alert("Success! Your message has been sent.");
                    form.reset();
                } else {
                    alert("Error: " + data.message);
                }

            } catch (error) {
                alert("Something went wrong. Please try again.");
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

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

    // ==========================================
    // 3. SWIPER INITIALIZATION
    // ==========================================
    let swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
});







const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton =document.querySelector("#menu-open-button")
const menuCloseButton =document.querySelector("#menu-close-button")


menuOpenButton.addEventListener ("click" , () => {
   //toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
} );

menuCloseButton.addEventListener("click" , () => menuOpenButton.click
());


// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});



//Initialize Swiper

let swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
     },
    768: {
      slidesPerView: 2,
     },
    1024: {
      slidesPerView: 3,
     }

}

});