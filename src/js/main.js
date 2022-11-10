"use strict";

function compareContainer(container) {
  if (container === "formContainerDesign") {
    formContainerFill.classList.add("hidden");
    formContainerShare.classList.add("hidden");
    arrowUpFill.classList.add("hidden");
    arrowUpShare.classList.add("hidden");
    arrowDownFill.classList.remove("hidden");
    arrowDownShare.classList.remove("hidden");
  } else if (container === "formContainerFill") {
    formContainerDesign.classList.add("hidden");
    formContainerShare.classList.add("hidden");
    arrowUpDesign.classList.add("hidden");
    arrowUpShare.classList.add("hidden");
    arrowDownDesign.classList.remove("hidden");
    arrowDownShare.classList.remove("hidden");
  } else {
    formContainerDesign.classList.add("hidden");
    formContainerFill.classList.add("hidden");
    arrowUpFill.classList.add("hidden");
    arrowUpDesign.classList.add("hidden");
    arrowDownFill.classList.remove("hidden");
    arrowDownDesign.classList.remove("hidden");
  }
}

function showContent(container, up, down) {
  container.classList.remove("hidden");
  up.classList.remove("hidden");
  down.classList.add("hidden");
  container.style.height = container.scrollHeight + "px";
  compareContainer();
}

function hideContent(container, up, down) {
  container.classList.add("hidden");
  up.classList.add("hidden");
  down.classList.remove("hidden");
  compareContainer();
}

// function handleOnClick(container, up, down) {
//     showContent(container, up, down);
//     hideContent(container, up, down);
//   up2.classList.add("hidden");
//   up3.classList.add("hidden");
//   if (container.classList.contains("hidden")) {
//     container.classList.remove("hidden");
//     up.classList.remove("hidden");
//     down.classList.add("hidden");
//     container.style.height = container.scrollHeight + "px";
//   } else {
//     container.classList.add("hidden");
//     up.classList.add("hidden");
//     down.classList.remove("hidden");
//     container.style.height = container.scrollHeight + "px";
//   }
// }

arrowUpDesign.addEventListener("click", () =>
  hideContent(formContainerDesign, arrowUpDesign, arrowDownDesign));
arrowDownDesign.addEventListener("click", () =>
  showContent(formContainerDesign, arrowUpDesign, arrowDownDesign));

arrowUpFill.addEventListener("click", () =>
hideContent(formContainerFill, arrowUpFill, arrowDownFill));
arrowDownFill.addEventListener("click", () =>
showContent(formContainerFill, arrowUpFill, arrowDownFill));

arrowUpShare.addEventListener("click", () =>
hideContent(formContainerShare, arrowUpShare, arrowDownShare));
arrowDownShare.addEventListener("click", () =>
showContent(formContainerShare, arrowUpShare, arrowDownShare));
