document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track img");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  const total = slides.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-white", i === index);
      dot.classList.toggle("bg-white/50", i !== index);
    });
  }

  function nextSlide() {
    index = (index + 1) % total;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    updateCarousel();
  }

  // Botones
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });

  // Auto play
  setInterval(nextSlide, 3000);

  updateCarousel();
});