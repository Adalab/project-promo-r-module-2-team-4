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


// data.job = 'hola';
// data['job'] = 'adios';

//Es lo mismo que:
// const propertyName = 'job';
// console.log(data[propertyName]);

    //Si lo hacemos con [elementName] ya no nos hace falta esto de abajo:

//  } else if (elementName === 'job') {
//   data.job = value;
//  } else if (elementName === 'email') {
//    data.email = value;
// } else if (elementName === "phone") {
//   data.phone = value;
//  } else if (elementName === 'linkedin') {
//    data.linkedin = value;
//  } else if (elementName === 'github') {
//   data.github = value;
//   }