"use strict";

const arrowUpFill = document.querySelector(".fill-arrow-up");
const arrowDownFill = document.querySelector(".fill-arrow-down");
const formContainerFill = document.querySelector(".form-container");

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
