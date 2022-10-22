"use strict";

const arrowUp = document.querySelector(".fill-arrow-up");
const arrowDown = document.querySelector(".fill-arrow-down");
const formContainer = document.querySelector(".form-container");

arrowUp.addEventListener("click", (e) => {
  e.preventDefault();
  if (arrowUp.classList.contains("hidden")) {
    arrowUp.classList.remove("hidden");
  } else {
    arrowUp.classList.add("hidden");
    arrowDown.classList.remove("hidden");
  }
});
arrowDown.addEventListener("click", (e) => {
  e.preventDefault();
  if (arrowDown.classList.contains("hidden") && paleteColors.classList.contains("hidden")) {
    arrowDown.classList.remove("hidden");
    paleteColors.classList.remove("hidden");
  } else {
    arrowDown.classList.add("hidden");
    arrowUp.classList.remove("hidden");
  }
});
