const ipad = window.matchMedia("screen and (max-width: 767px)");
const menu = document.querySelector(".navbar-top__list");
const burgerButton = document.querySelector("#burger-menu");
const portfolioLink = document.getElementById("portfolio-link");
const contactlioLink = document.getElementById("contact-link");

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
    portfolioLink.addEventListener("click", hideShow);
    contactlioLink.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
    portfolioLink.removeEventListener("click", hideShow);
    contactlioLink.removeEventListener("click", hideShow);
  }
}

validation(ipad);

function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}

function validate(str) {
  const submitButton = document.getElementById("submitButton");
  const emailInput = document.getElementById("emailInput");
  const emailLabel = document.getElementById("emailLabel");
  const emailRegex = /^\w{2,30}@[\w\.]{2,10}\.\w{2,5}$/i;

  if (str.match(emailRegex)) {
    submitButton.disabled = false;
    emailLabel.innerText = "";
  } else if (str === "") {
    emailLabel.innerText = "";
  } else {
    submitButton.disabled = true;
    emailLabel.innerText = "*Invalid email";
  }
}
