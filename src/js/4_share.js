"use strict";
function enableSectionShare() {
  sectionCreatedCard.classList.remove("hidden");
}

function disableSectionShare() {
  sectionCreatedCard.classList.add("hidden");
  //botón reset hará una llamada  a esto
}

function disableCreateBtn() {
  createButton.disabled = true;
  createButton.classList.add("create-btn-disabled");
}

function enableCreateBtn() {
  createButton.disabled = false;
  createButton.classList.remove("create-btn-disabled");
  //botón reset hará una llamada  a esto
}

function handleCreateButtonClick(event) {
  event.preventDefault();
  disableCreateBtn();
  enableSectionShare();
  sendRequest();
}

createButton.addEventListener("click", handleCreateButtonClick);
