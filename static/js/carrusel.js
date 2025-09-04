<<<<<<< HEAD
const carousel = document.querySelector(".carousel-inner");
const totalSlides = document.querySelectorAll(".carousel-item").length;
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

setInterval(nextSlide, 3000); // Cambio automático cada 3 segundos
=======
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
>>>>>>> 154d9c7 (Primer commit)
