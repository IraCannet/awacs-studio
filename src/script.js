function changeLogo(event) {
  event.preventDefault();
  event.target.innerHTML = "V W A C S";
}

let followLink = document.querySelector("#main-logo");
followLink.addEventListener("click", changeLogo);
