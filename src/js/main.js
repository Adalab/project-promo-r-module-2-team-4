// "use strict";

// // function compareContainer(container) {
// //   if (container === "formContainerDesign") {
// //     formContainerFill.classList.add("hidden");
// //     formContainerShare.classList.add("hidden");
// //     arrowUpFill.classList.add("hidden");
// //     arrowUpShare.classList.add("hidden");
// //     arrowDownFill.classList.remove("hidden");
// //     arrowDownShare.classList.remove("hidden");
// //   } else if (container === "formContainerFill") {
// //     formContainerDesign.classList.add("hidden");
// //     formContainerShare.classList.add("hidden");
// //     arrowUpDesign.classList.add("hidden");
// //     arrowUpShare.classList.add("hidden");
// //     arrowDownDesign.classList.remove("hidden");
// //     arrowDownShare.classList.remove("hidden");
// //   } else {
// //     formContainerDesign.classList.add("hidden");
// //     formContainerFill.classList.add("hidden");
// //     arrowUpFill.classList.add("hidden");
// //     arrowUpDesign.classList.add("hidden");
// //     arrowDownFill.classList.remove("hidden");
// //     arrowDownDesign.classList.remove("hidden");
// //   }
// // }

// // function showContent(container, up, down) {
// //   container.classList.remove("hidden");
// //   up.classList.remove("hidden");
// //   down.classList.add("hidden");
// //   container.style.height = container.scrollHeight + "px";
// //   compareContainer();
// // }

// // function hideContent(container, up, down) {
// //   container.classList.add("hidden");
// //   up.classList.add("hidden");
// //   down.classList.remove("hidden");
// //   compareContainer();
// // }

// function handleOnClick(container, down, up2, up3, down1, down2) {
//   up2.classList.add("hidden");
//   up3.classList.add("hidden");

//   if (container.classList.contains("hidden")) {
//     container.classList.remove("hidden");
//     down.classList.add("rotate");
//     down1.classList.add("rotate");
//     down2.classList.add("rotate");
//     container.style.height = container.scrollHeight + "px";
//   } else {
//     container.classList.add("hidden");
//     down.classList.remove("rotate");
 
//     container.style.height = container.scrollHeight + "px";
//   }
// }



// arrowDownDesign.addEventListener("click", () => {

// }
// // handleOnClick(formContainerDesign, arrowDownDesign, formContainerFill, formContainerShare, arrowDownFill, arrowDownShare));

// arrowDownFill.addEventListener("click", () =>
// handleOnClick(formContainerFill, arrowDownFill, formContainerDesign, formContainerShare, arrowDownDesign, arrowDownShare));

// arrowDownShare.addEventListener("click", () =>
// handleOnClick(formContainerShare, arrowDownShare, formContainerDesign, formContainerFill, arrowDownDesign, arrowDownFill));
