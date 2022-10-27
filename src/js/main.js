"use strict";

//Función para que al hacer <click> en las flechas el form
//aparezca o se oculte

function showForm(arrowUp, arrowDown) {}

function hideForm(arrowUp, arrowDown) {}

//Función manejadora
function handleClick(event) {
  e.preventDefault();

  if (arrowUpFill.classList.contains("hidden")) {
    arrowUpFill.classList.remove("hidden");
  } else {
    arrowUpFill.classList.add("hidden");
    arrowDownFill.classList.remove("hidden");
  }
}

arrowUpFill.addEventListener("click", (e) => {
  e.preventDefault();
  if (arrowUpFill.classList.contains("hidden")) {
    arrowUpFill.classList.remove("hidden");
  } else {
    arrowUpFill.classList.add("hidden");
    arrowDownFill.classList.remove("hidden");
  }
});
arrowDownFill.addEventListener("click", (e) => {
  e.preventDefault();
  if (arrowDownFill.classList.contains("hidden") && paleteColors.classList.contains("hidden")) {
    arrowDownFill.classList.remove("hidden");
    paleteColors.classList.remove("hidden");
  } else {
    arrowDownFill.classList.add("hidden");
    arrowUpFill.classList.remove("hidden");
  }
});
