document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const dots  = document.querySelectorAll(".dot");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (!track) return;

  const slides = track.querySelectorAll(".carousel-slide");
  const total  = slides.length;
  let index    = 0;
  let autoplay;

  function goTo(n) {
    index = (n + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("dot-active", i === index);
    });
  }

  function startAutoplay() {
    autoplay = setInterval(() => goTo(index + 1), 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
  }

  // Botones
  nextBtn?.addEventListener("click", () => { stopAutoplay(); goTo(index + 1); startAutoplay(); });
  prevBtn?.addEventListener("click", () => { stopAutoplay(); goTo(index - 1); startAutoplay(); });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { stopAutoplay(); goTo(i); startAutoplay(); });
  });

  // Pausa al pasar el mouse
  track.closest(".carousel-wrapper")?.addEventListener("mouseenter", stopAutoplay);
  track.closest(".carousel-wrapper")?.addEventListener("mouseleave", startAutoplay);

  // Swipe táctil
  let touchStartX = 0;
  track.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      stopAutoplay();
      goTo(diff > 0 ? index + 1 : index - 1);
      startAutoplay();
    }
  });

  goTo(0);
  startAutoplay();
});
