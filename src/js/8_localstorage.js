"use strict";
function saveInLocalStorage(data) {
  localStorage.setItem("dataFromForm", JSON.stringify(data));
  //cada vez que se escribe algo en el input se guarda en el localStorage en la variable "dataFromForm". Como estas variables solo guardan string, hay que hacer stringify. Ahora cuando se recargue la página se queda el valor guardado en el localStorage, aunque aún no se pone en el input. Para eso habrá que guardarlo como objeto local:
}

data = JSON.parse(localStorage.getItem("dataFromForm"));
updatePreview();
nameInput.value = data.name;
jobInput.value = data.job;

//Esto habrá que borrarlo cuando le demos a reset
