function resetInput() {
    nameInput.value = '';
    jobInput.value = '';
    emailInput.value= '';
    phoneInput.value = '';
    linkedinInput.value = '';
    github.Input.value = ''; 
}

function handleclikreset (event) {
    event.preventDefault();
    resetInput ();
    updatePreview();
  }

  resetBtn.addEventListener('click', handleclikreset);
  