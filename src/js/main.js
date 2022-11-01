"use strict";

function handleOnClick(up, down, container) {
  up.classList.toggle("hidden");
  down.classList.toggle("hidden");
  container.classList.toggle("hidden");
}

arrowUpDesign.addEventListener("click", () => handleOnClick(arrowUpDesign, arrowDownDesign, formContainerDesign));
arrowDownDesign.addEventListener("click", () => handleOnClick(arrowUpDesign, arrowDownDesign, formContainerDesign));

arrowUpFill.addEventListener("click", () => handleOnClick(arrowUpFill, arrowDownFill, formContainerFill));
arrowDownFill.addEventListener("click", () => handleOnClick(arrowUpFill, arrowDownFill, formContainerFill));

arrowUpShare.addEventListener("click", () => handleOnClick(arrowUpShare, arrowDownShare, formContainerShare));
arrowDownShare.addEventListener("click", () => handleOnClick(arrowUpShare, arrowDownShare, formContainerShare));
