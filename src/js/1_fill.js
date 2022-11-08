"use strict";

//Datos que cambiará el código de la función manejadora
const data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
};

//Función que va a coger los datos de data, que están en variables, y los va a modificar
function updatePreview() {
  data.name = nameInput.value;
  data.job = jobInput.value;
  data.phone = phoneInput.value;
  data.email = emailInput.value;
  data.linkedin = linkedinInput.value;
  data.github = linkedinInput.value;
  if (data.name === "") {
    previewName.innerHTML = "Nombre Apellidos";
  } else {
    previewName.innerHTML = data.name;
    console.log(data.name);
  }
  if (data.job === "") {
    previewJob.innerHTML = "Front-end developer";
  } else {
    previewJob.innerHTML = data.job;
  }
  if (data.phone === "") {
    previewPhone.href = "";
  } else {
    previewPhone.href = `tel:${data.phone}`;
  }
  if (data.email === "") {
    previewEmail.href = "";
  } else {
    previewEmail.href = `mailto:${data.email}`;
  }
  if (data.linkedin === "") {
    previewLinkedin.href = "";
  } else {
    previewLinkedin.href = `${data.linkedin}`;
  }
  if (data.github === "") {
    previewGithub.href = "";
  } else {
    previewGithub.href = `https://github.com/${data.github}`;
  }
}

// let name = '';
// let job = '';
// let email = '';

//Listening in all form. Se le pone un evento de tipu input que empiece a funcionar cada vez que se haga click en un input. Se está escuchando todo el formulario, así que hay que saber en qué input está escribiendo y qué valor ha escrito.

form.addEventListener("input", (event) => {
  const elementName = event.target.name; //Este event.target está diciendo sobre qué input escribe la usuaria. Name es el atributo gancho para conectar los inputs desde html con esto.

  const value = event.target.value; //Donde está escribiendo la usuaria, todo lo que escriba hasta ahora se guarda aquí. Nosotros a su vez lo guardamos en la variable value.

  //Si la usuaria está escribiendo en el input que tiene name: 'name':

  if (elementName === [elementName]) {
    data[elementName] = value;
  }

  //guarda lo que está escribiendo en este input dentro de la variable value. Este value se crea solo al rellenar el input.

  updatePreview();
});
