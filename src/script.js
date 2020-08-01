function changeLogo(event) {
  event.preventDefault();
  event.target.innerHTML = "VWACS";
}

let followLink = document.querySelector("#main-logo");
followLink.addEventListener("click", changeLogo);
