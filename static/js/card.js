/**
 * Muestra u oculta la información extra de una card.
 * @param {HTMLButtonElement} btn  - Botón que disparó el evento
 * @param {string}            id   - ID del elemento con la info extra
 */
function mostrarInfo(btn, id) {
  const extra = document.getElementById(id);
  if (!extra) return;

  const isHidden = extra.classList.contains("hidden");
  extra.classList.toggle("hidden", !isHidden);
  btn.textContent = isHidden ? "Ocultar" : "Ver más";
}

/**
 * Aplica la animación Tailwind seleccionada al elemento demo
 * y actualiza el texto indicador.
 * @param {HTMLButtonElement} btn       - Botón presionado
 * @param {string}            animClass - Clase de animación Tailwind
 */
function aplicarAnimacion(btn, animClass) {
  const target  = document.getElementById("animTarget");
  const current = document.getElementById("animCurrent");
  if (!target || !current) return;

  // Quitar animaciones previas
  target.classList.remove("animate-bounce", "animate-pulse", "animate-ping", "animate-spin");

  // Aplicar la nueva
  target.classList.add(animClass);
  current.textContent = `Animación activa: ${animClass}`;

  // Resaltar botón activo
  document.querySelectorAll(".anim-btn").forEach(b => b.style.outline = "none");
  btn.style.outline = "3px solid #0ea5e9";
  btn.style.outlineOffset = "2px";
}
