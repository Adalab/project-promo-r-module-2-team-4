"use strict";

paletteOne.addEventListener("click", () => {
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-1`);
});

paletteTwo.addEventListener("click", () => {
  previewCard.classList.remove(`colorsPalette-1`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-2`);
});

paletteThree.addEventListener("click", () => {
  previewCard.classList.remove(`colorsPalette-1`);
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.add(`colorsPalette-3`);
});
