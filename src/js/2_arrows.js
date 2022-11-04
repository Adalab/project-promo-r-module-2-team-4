"use strict";
// flechas de diseña
function designArrow(arrowUp, container, arrowDown) {
  formContainerFill.classList.add("hidden");
  formContainerShare.classList.add("hidden");
  if (container.classList.contains("hidden")) {
    arrowUp.classList.remove("hidden");
    container.classList.remove("hidden");
    arrowDown.classList.add("hidden");
  } else {
    arrowUp.classList.add("hidden");
    container.classList.add("hidden");
    arrowDown.classList.remove("hidden");
  }
}

// flechas de fill
function fillArrow(arrowUp, container, arrowDown) {
  formContainerDesign.classList.add("hidden");
  formContainerShare.classList.add("hidden");
  if (container.classList.contains("hidden")) {
    arrowUp.classList.remove("hidden");
    container.classList.remove("hidden");
    arrowDown.classList.add("hidden");
  } else {
    arrowUp.classList.add("hidden");
    container.classList.add("hidden");
    arrowDown.classList.remove("hidden");
  }
}
// flechas de share
function shareArrow(arrowUp, container, arrowDown) {
  formContainerDesign.classList.add("hidden");
  formContainerFill.classList.add("hidden");

  if (container.classList.contains("hidden")) {
    arrowUp.classList.remove("hidden");
    container.classList.remove("hidden");
    arrowDown.classList.add("hidden");
  } else {
    arrowUp.classList.add("hidden");
    container.classList.add("hidden");
    arrowDown.classList.remove("hidden");
  }
}

// funcion manejadora diseño
function handleClicDesignArrow(ev) {
  ev.preventDefault();
  designArrow(arrowUpDesign, formContainerDesign, arrowDownDesign);
}
// funcion manejadora de las flechas del formulario
function handleClickFillArrow(ev) {
  ev.preventDefault();
  fillArrow(arrowUpFill, formContainerFill, arrowDownFill);
}
// funcion manejadora share
function handleClicShareArrow(ev) {
  ev.preventDefault();
  shareArrow(arrowUpShare, formContainerShare, arrowDownShare);
}

// Eventos
arrowDesign.addEventListener("click", handleClicDesignArrow);
arrowFill.addEventListener("click", handleClickFillArrow);
arrowShare.addEventListener("click", handleClicShareArrow);
