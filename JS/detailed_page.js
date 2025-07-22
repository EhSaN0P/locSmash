const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});



const openBtn = document.querySelector('.openRating');
const openBtn2 = document.querySelector('.openRating2');
const closeBtn = document.getElementById('closeRating');
const overlay = document.getElementById('ratingOverlay');
const numbers = document.querySelectorAll('.rating-number');
const selected = document.getElementById('selectedRating');

openBtn.addEventListener('click', () => {
    overlay.classList.toggle('show');
});

openBtn2.addEventListener('click', () => {
    overlay.classList.toggle('show');
});


closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
});

numbers.forEach(num => {
    num.addEventListener('click', () => {
        numbers.forEach(n => n.classList.remove('active'));
        num.classList.add('active');
        selected.textContent = `امتیاز: ${num.textContent}`;
    });
});