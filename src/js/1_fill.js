"use strict";

// let name = "";

// nameInput.addEventListener("input", () => {
//   name = nameInput.value;

//   if (name === "") {
//     previewName.innerHTML = "Nombre Apellidos";
//   } else {
//     previewName.innerHTML = name;
//   }
// });

function updatePreview(){
    console.log(nameInput);
    if (nameInput === "") {
        previewName.innerHTML = "Nombre Apellidos";
    }
    if (jobInput === "") {
        previewJob.innerHTML = "Front-end Developer";
    } else { 
        previewJob.innerHTML = jobInput;
    }
    if (emailInput === "") {
        previewEmail.href="";
    } else {
        previewEmail.href=`mailto: ${emailInput}`;
    }
};

form.addEventListener('input', (e) => {
    const elementName = event.target.name;
    const value = event.target.value;

    if (elementName === "completeName") {
       nameInput = value;
    } else if (elementName === "position"){
        jobInput = value;
    } else if (elementName === "email"){
        emailInput = value;
    }
    updatePreview();
});