"use strict";

// function handleOnClick(up, down, container) {
//   up.classList.toggle("hidden");
//   down.classList.toggle("hidden");
//   container.classList.toggle("hidden");
// }

function handleOnClick(up, down, container) {
  if (container.classList.contains("closed")) {
    container.classList.remove("closed");
    container.setAttribute("style", "height: 175px");
  } else {
    container.classList.add("closed");
    container.setAttribute("style", "height: 0px");
  }
}

arrowUpDesign.addEventListener("click", () => handleOnClick(arrowUpDesign, arrowDownDesign, formContainerDesign));
arrowDownDesign.addEventListener("click", () => handleOnClick(arrowUpDesign, arrowDownDesign, formContainerDesign));

arrowUpFill.addEventListener("click", () => handleOnClick(arrowUpFill, arrowDownFill, formContainerFill));
arrowDownFill.addEventListener("click", () => handleOnClick(arrowUpFill, arrowDownFill, formContainerFill));

arrowUpShare.addEventListener("click", () => handleOnClick(arrowUpShare, arrowDownShare, formContainerShare));
arrowDownShare.addEventListener("click", () => handleOnClick(arrowUpShare, arrowDownShare, formContainerShare));
