const input = document.querySelector("input");
const select = document.getElementById("planets");
const btn = document.querySelector("button");
const div = document.querySelector(".flex-container");
let planet;

select.addEventListener("change", update);
btn.addEventListener("click", showWeight);

function update() {
  planet = select.options[select.selectedIndex].value;
}

function showWeight() {
  let weight;
  if (input.value === NaN) {
    weight = "Invalid";
  } else {
    switch (planet) {
      case "earth":
        weight = input.value;
        break;
      case "jupiter":
        weight = input.value * 2.64;
        break;
      case "mars":
        weight = input.value * 0.38;
        break;
      case "mercury":
        weight = input.value * 0.37;
        break;
      case "moon":
        weight = input.value * 0.17;
        break;
      case "neptune":
        weight = input.value * 1.18;
        break;
      case "saturn":
        weight = input.value * 1.15;
        break;
      case "uranus":
        weight = input.value * 1.17;
        break;
      case "venus":
        weight = input.value * 0.88;
        break;
      default:
        weight = "Select a planet";
        break;
    }

    div.innerHTML = `<div class="flex-item image">
                        <img src='./src/${planet}.png' id="planet-image" />
                    </div>
                    <div class="flex-item description"></div>`;

    const text = document.querySelector(".description");

    text.innerHTML = `<p>The weight of the object on ${planet.toUpperCase()}</p><p>${weight.toFixed(
      2
    )}N</p>`;
  }
}
