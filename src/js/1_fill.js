"use strict";

// // let name = "";

// // nameInput.addEventListener("input", () => {
// //   name = nameInput.value;

// //   if (name === "") {
// //     previewName.innerHTML = "Nombre Apellidos";
// //   } else {
// //     previewName.innerHTML = name;
// //   }
// // });

// function updatePreview(){
//     console.log(nameInput);
//     if (nameInput === "") {
//         previewName.innerHTML = "Nombre Apellidos";
//     }
//     if (jobInput === "") {
//         previewJob.innerHTML = "Front-end Developer";
//     } else { 
//         previewJob.innerHTML = jobInput;
//     }
//     if (emailInput === "") {
//         previewEmail.href="";
//     } else {
//         previewEmail.href=`mailto: ${emailInput}`;
//     }
// };

// form.addEventListener('input', (e) => {
//     const elementName = event.target.name;
//     const value = event.target.value;

//     if (elementName === "completeName") {
//        nameInput = value;
//     } else if (elementName === "position"){
//         jobInput = value;
//     } else if (elementName === "email"){
//         emailInput = value;
//     }
//     updatePreview();
// });

//Datos que cambiará el código de la función manejadora
const data = {
    palette: '',
    name: '',
    job: '',
    phone: '',
    email:'',
    linkedin: '',
    github: '',
    photo: '',
}


//Función que va a coger los datos de data, que están en variables, y los va a modificar
function updatePreview() {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = job;
  }
  if (data.email === '') {
    previewEmail.href = '';
  } else {
    previewEmail.href = `mailto:${email}`;
  }
}


let name = '';
let job = '';
let email = '';


// nameInput.addEventListener('input', () => {
//   name = nameInput.value;
//   updatePreview();
// });

// jobInput.addEventListener('input', () => {
//   job = jobInput.value;
//   updatePreview();
// });
// emailInput.addEventListener('input', () => {
//   email = emailInput.value;
//   updatePreview();
// });




//Listening in all form. Se le pone un evento de tipu input que empiece a funcionar cada vez que se haga click en un input. Se está escuchando todo el formulario, así que hay que saber en qué input está escribiendo y qué valor ha escrito.

form.addEventListener('input', (event) => {
  const elementName = event.target.name; //Este event.target está diciendo sobre qué input escribe la usuaria. Name es el atributo gancho para conectar los inputs desde html con esto.

  const value = event.target.value; //Donde está escribiendo la usuaria, todo lo que escriba hasta ahora se guarda aquí. Nosotros a su vez lo guardamos en la variable value.
  
  if(elementName === 'name') { //Si la usuaria está escribiendo en el input que tiene name: 'name';
    data[elementName] = value; //guarda lo que está escribiendo en este input dentro de la variable value. Este value se crea solo al rellenar el input.

    //Si lo hacemos con [elementName] ya no nos hace falta esto de abajo:
//   } else if (elementName === 'job') {
//     data.job = value;
//   } else if (elementName === 'email') {
//     data.email = value;
//   } else if (elementName === "phone") {
//     data.phone = value;
//   } else if (elementName === 'linkedin') {
//     data.linkedin = value;
//   } else if (elementName === 'github') {
//     data.github = value;
  }
  
  
  
  updatePreview();
})

// data.job = 'hola';
// data['job'] = 'adios';

//Es lo mismo que:
// const propertyName = 'job';
// console.log(data[propertyName]);