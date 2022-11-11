"use strict";

function resetInput() {
    nameInput.value = '';
    jobInput.value = '';
    emailInput.value= '';
    phoneInput.value = '';
    linkedinInput.value = '';
    githubInput.value = ''; 
    profileImage.style.backgroundImage = "";
    profilePreview.style.backgroundImage = "";

}

function handleClickReset(event) {
  event.preventDefault();
  resetInput();
  updatePreview();
  disableSectionShare();
  enableCreateBtn();
  saveInLocalStorage(data);
}

resetBtn.addEventListener("click", handleClickReset);
