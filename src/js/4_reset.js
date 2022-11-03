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
  }

  resetBtn.addEventListener('click', handleClickReset);
  