"use strict";

function sendRequest() {
  fetch("https://awesome-profile-cards.herokuapp.com/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.json);
      if (response.success) {
        linkShare.innerHTML = "<a class='card-created-url' href=" + response.cardURL + ">" + response.cardURL + "</a>";
        linkTwitter.href = `https://twitter.com/intent/tweet?text=%C2%A1Mira%20la%20m%C3%A1gica%20tarjeta%20que%20he%20creado!!&url=${response.cardURL }`;
      } else {
        linkShare.innerHTML = "ERROR:" + response.error;
      }
    });
}
