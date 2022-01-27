document.body.addEventListener("keypress", (e) => {
  const p = document.querySelector("p");

  p.innerHTML = "You pressed: <span></span>";

  const span = document.querySelectorAll("span");

  span[0].innerHTML = `"${e.key.toUpperCase()}"`;
  span[1].innerHTML = e.keyCode;
});
