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
