"use strict";
// const paletteOne = document.querySelector(".js-paletteOne");
// const paletteTwo = document.querySelector(".js-paletteTwo");
// const paletteThree = document.querySelector(".js-paletteThree");

paletteOne.addEventListener("click", () => {
  console.log("click1");
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-1`);
});

paletteTwo.addEventListener("click", () => {
  console.log("click2");
  previewCard.classList.remove(`colorsPalette-1`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-2`);
});

paletteThree.addEventListener("click", () => {
  console.log("click3");
  previewCard.classList.remove(`colorsPalette-1`);
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.add(`colorsPalette-3`);
});
