"use strict";

function resetInput() {
    nameInput.value = '';
    jobInput.value = '';
    emailInput.value= '';
    phoneInput.value = '';
    linkedinInput.value = '';
    githubInput.value = ''; 
}

function handleClickReset (event) {
    event.preventDefault();
    resetInput ();
    updatePreview();
    disableSectionShare();
    enableCreateBtn();
  }

  resetBtn.addEventListener('click', handleClickReset);
  