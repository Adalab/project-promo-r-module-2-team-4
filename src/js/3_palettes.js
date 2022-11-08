"use strict";

paletteOne.addEventListener("click", (event) => {
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-1`);
  previewCard.classList.add(event.currentTarget.value);
  data.palette = event.currentTarget.value;
});

paletteTwo.addEventListener("click", (event) => {
  previewCard.classList.remove(`colorsPalette-1`);
  previewCard.classList.remove(`colorsPalette-3`);
  previewCard.classList.add(`colorsPalette-2`);
  previewCard.classList.add(event.currentTarget.value);
  data.palette = event.currentTarget.value;
});

paletteThree.addEventListener("click", (event) => {
  previewCard.classList.remove(`colorsPalette-1`);
  previewCard.classList.remove(`colorsPalette-2`);
  previewCard.classList.add(`colorsPalette-3`);
  previewCard.classList.add(event.currentTarget.value);
  data.palette = event.currentTarget.value;
});
