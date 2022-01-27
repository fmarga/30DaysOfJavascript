const span = document.querySelectorAll("span");
console.log(span);

document.body.addEventListener("keypress", (e) => {
  console.log(e);
  span[0].innerHTML = `"${e.key.toUpperCase()}"`;
  span[1].innerHTML = e.keyCode;
});
