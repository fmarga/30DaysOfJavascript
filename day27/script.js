const textAnimated = document.querySelector(".bkg");
const btn = document.querySelectorAll(".btn");
const spanTechs = document.querySelector("#techs");

//text changing
const textChange = [
  "Educator",
  "Instructor",
  "Programmer",
  "Motivational Speaker",
  "Motivator",
];

let item;
setInterval(() => {
  item = Math.floor(Math.random() * textChange.length);
  textAnimated.innerHTML = `<p>${textChange[item]}</p>`;
}, 2000);

//techs changing
const techs = [
  "React",
  "Redux",
  "Node",
  "Python",
  "MongoDB",
  "Pandas",
  "Numpy",
];

let tech;
setInterval(() => {
  tech = Math.floor(Math.random() * techs.length);
  spanTechs.innerText = techs[tech];
  const hexaType = "abcdef0123456789";
  let hexa = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexaType.length);
    hexa += hexaType[randomNumber];
  }
  spanTechs.style.color = hexa;
}, 2000);
