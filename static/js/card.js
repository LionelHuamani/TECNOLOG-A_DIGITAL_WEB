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
