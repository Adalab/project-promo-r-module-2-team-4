"use strict";

//Función para que al hacer <click> en las flechas el form
//aparezca o se oculte

function showForm(arrowUp, content) {
  arrowUp.classList.toggle("hidden");
  content.classList.toggle("hidden");
}

function hideForm(arrowUp, arrowDown) {}

//Función manejadora
function handleClickFill(e) {
  e.preventDefault();
  showForm(arrowUpFill, formContainerFill);
}

arrowUpFill.addEventListener("click", handleClickFill);

// Formulario parte diseña

function arrowDown() {
  arrowDownDesign.classList.add("hidden");
  formContainerDesign.classList.add("hidden");
  console.log(`click arrow down`);
}
function arrowUp() {
  arrowUpDesign.classList.remove("hidden");
  formContainerDesign.classList.remove("hidden");
  formContainerDesign.classList.add("hidden");
}
// Ejecutamos la funcion manejadora
function handleClickDesing(ev) {
  ev.preventDefault();
  arrowDown();
  arrowUp();
}
// Evento
arrowUpDesign.addEventListener("click", handleClickDesing);
