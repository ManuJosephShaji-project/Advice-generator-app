const fetchButton = document.querySelector(".dice-btn");
const dataContainer = document.querySelector(".data-container");
const adviceNumber = document.querySelector("#quote-id");
const API_URL = "https://api.adviceslip.com/advice";

quoteGenerater();

fetchButton.addEventListener("click", () => {
  quoteGenerater();
});

function quoteGenerater() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      dataContainer.innerHTML = `<h1 style="font-size: 1.6rem;">"${data.slip.advice}"</h1>`;
      adviceNumber.innerHTML = `<p style="font-size: 15px;"> ${data.slip.id}</p>`;
    })
    .catch((error) => {
      dataContainer.innerHTML = `<h1 style="font-size: 1.6rem;">Error fetching data: ${error.message}</p>`;
    });
}
