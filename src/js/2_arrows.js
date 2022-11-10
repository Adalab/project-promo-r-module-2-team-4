"use strict";
// flechas de diseña
function designArrow(container, arrowDown) {
  formContainerFill.classList.add("hidden");
  formContainerShare.classList.add("hidden");
  arrowDownFill.classList.remove("rotate");
  arrowDownShare.classList.remove("rotate");
  container.classList.remove("hidden");
  arrowDown.classList.add("rotate");
  container.classList.add("transition");
  container.style.height = container.scrollHeight + "px";
  }

// flechas de fill
function fillArrow(container, arrowDown) {
  formContainerDesign.classList.add("hidden");
  formContainerShare.classList.add("hidden");
  arrowDownDesign.classList.remove("rotate");
  arrowDownShare.classList.remove("rotate");
  container.classList.remove("hidden");
  arrowDown.classList.add("rotate");
  container.classList.add("transition");
  container.style.height = container.scrollHeight + "px";
}

// flechas de share
function shareArrow(container, arrowDown) {
  formContainerDesign.classList.add("hidden");
  formContainerFill.classList.add("hidden");
  arrowDownFill.classList.remove("rotate");
  arrowDownDesign.classList.remove("rotate");
  container.classList.remove("hidden");
  arrowDown.classList.add("rotate");
  container.classList.add("transition");
  container.style.height = container.scrollHeight + "px";
}

// funcion manejadora diseño
function handleClickDesignArrow(ev) {
  ev.preventDefault();
  designArrow(formContainerDesign, arrowDownDesign);
}
// funcion manejadora de las flechas del formulario
function handleClickFillArrow(ev) {
  ev.preventDefault();
  fillArrow(formContainerFill, arrowDownFill);
}
// funcion manejadora share
function handleClickShareArrow(ev) {
  ev.preventDefault();
  shareArrow(formContainerShare, arrowDownShare);
}

// Eventos
arrowDesign.addEventListener("click", handleClickDesignArrow);
arrowFill.addEventListener("click", handleClickFillArrow);
arrowShare.addEventListener("click", handleClickShareArrow);
