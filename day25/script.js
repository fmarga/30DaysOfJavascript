import { countries } from "./countries.js";

const pop = document.querySelector(".population");
const lang = document.querySelector(".languages");
const result = document.querySelector(".result");
const span = document.querySelector(".detail");
const ul = document.createElement("ul");
result.appendChild(ul);

pop.addEventListener("click", popNumber);
lang.addEventListener("click", langNumber);

function popNumber() {
  span.innerText = "10 Most populated countries in the world";

  const newArr = countries
    .sort((a, b) => {
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    })
    .slice(0, 10);

  const world = countries
    .map((item) => item.population)
    .reduce((acc, curr) => acc + curr, 0);

  ul.innerHTML = "";
  ul.innerHTML += `<li><p>World</p> <p>${world}</p><li>`;
  for (let i = 1; i < newArr.length; i++) {
    ul.innerHTML += `<li><p>${newArr[i].name}</p> <p>${newArr[i].population}</p><li>`;
  }
}

function langNumber() {
  span.innerText = "10 Most spoken languages in the world";
  const arrLang = countries.map((country) => country.languages.toString());
  const english = [];
  const french = [];
  const arabic = [];
  const spanish = [];
  const portuguese = [];
  const russian = [];
  const dutch = [];
  const german = [];
  const chinese = [];
  const serbian = [];

  for (let i = 0; i < arrLang.length; i++) {
    if (arrLang[i].includes("English")) {
      english.push(arrLang[i]);
    }
    if (arrLang[i].includes("French")) {
      french.push(arrLang[i]);
    }
    if (arrLang[i].includes("Arabic")) {
      arabic.push(arrLang[i]);
    }
    if (arrLang[i].includes("Spanish")) {
      spanish.push(arrLang[i]);
    }
    if (arrLang[i].includes("Portuguese")) {
      portuguese.push(arrLang[i]);
    }
    if (arrLang[i].includes("Russian")) {
      russian.push(arrLang[i]);
    }
    if (arrLang[i].includes("Dutch")) {
      dutch.push(arrLang[i]);
    }
    if (arrLang[i].includes("German")) {
      german.push(arrLang[i]);
    }
    if (arrLang[i].includes("Chinese")) {
      chinese.push(arrLang[i]);
    }
    if (arrLang[i].includes("Serbian")) {
      serbian.push(arrLang[i]);
    }
  }
  const total = [
    {
      language: "English",
      countries: english.length,
    },
    {
      language: "French",
      countries: french.length,
    },
    {
      language: "Arabic",
      countries: arabic.length,
    },
    {
      language: "Spanish",
      countries: spanish.length,
    },
    {
      language: "Portuguese",
      countries: portuguese.length,
    },
    {
      language: "Russian",
      countries: russian.length,
    },
    {
      language: "Dutch",
      countries: dutch.length,
    },
    {
      language: "German",
      countries: german.length,
    },
    {
      language: "Chinese",
      countries: chinese.length,
    },
    {
      language: "Serbian",
      countries: serbian.length,
    },
  ];

  ul.innerHTML = "";
  for (let i = 0; i < total.length; i++) {
    ul.innerHTML += `<li><p>${total[i].language}</p> <p>${total[i].countries}</p><li>`;
  }
}
