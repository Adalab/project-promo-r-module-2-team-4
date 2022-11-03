"use strict";
// flechas de diseña
function designArrow(arrowUp, container, arrowDown) {
  if (container.classList.contains("closed")) {
    arrowUp.classList.remove("hidden");
    container.classList.remove("closed");
    arrowDown.classList.add("hidden");
  } else {
    arrowUp.classList.add("hidden");
    container.classList.add("closed");
    arrowDown.classList.remove("hidden");
  }
}

// flechas de fill

// flechas de share

// Evento para hacer click en las flechas
function handleClickArrow(ev) {
  ev.preventDefault();
  console.log("click flecha up");
  designArrow(arrowUpDesign, formContainerDesign, arrowDownDesign);
}
arrow.addEventListener("click", handleClickArrow);
