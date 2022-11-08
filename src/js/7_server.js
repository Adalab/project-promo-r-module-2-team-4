"user strict";

function sendRequest(event) {
  event.preventDefault();
  fetch("https://awesome-profile-cards.herokuapp.com/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((responseJson) => {
      if (response.Json.success) {
        linkShare.innerHTML =
          "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
      } else {
        linkShare.innerHTML = "ERROR:" + result.error;
      }
    });
}
