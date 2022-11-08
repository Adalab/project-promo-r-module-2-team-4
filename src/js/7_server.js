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
      } else {
        linkShare.innerHTML = "ERROR:" + response.error;
      }
    });
}
