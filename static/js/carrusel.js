const carousel = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.carousel-indicator');

const totalSlides = dots.length;
let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

updateCarousel();
setInterval(nextSlide,3000); // Cambia de imagen cada 3 segundos
