"user strict";

function sendRequest() {
  fetch("https://awesome-profile-cards.herokuapp.com/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((responseJson) => {
      if (responseJson.success) {
        linkShare.innerHTML =
          "<a href=" +
          responseJson.cardURL +
          ">" +
          responseJson.cardURL +
          "</a>";
      } else {
        linkShare.innerHTML = "ERROR:" + responseJson.error;
      }
    });
}
