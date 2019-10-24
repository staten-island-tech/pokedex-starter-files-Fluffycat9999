const DOMStrings = {
  input: document.getElementById("pkmn-form"),
  name: document.getElementById("pokemon-name"),
  displayName: document.querySelector(".pkmn-name-size"),
  displayImageFront: document.querySelector(".display-image-front-def"),
  displayImageBack: document.querySelector(".display-image-back-def"),
  displayImageShinyFront: document.querySelector(".display-image-shiny-front"),
  displayImageShinyBack: document.querySelector(".display-image-shiny-back"),
  displayNum: document.querySelector(".pkmn-num"),
  type: document.querySelector(".type")
};

DOMStrings.input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".nes-btn").click();
  }
});

function getPkmn() {
  DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();
    //console.log('something happened');
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${DOMStrings.name.value}`
      ); //await will return if in async
      const data = await result.json();
      //console.log(data);

      const displayPkmn = function(data) {
        DOMStrings.displayName.innerText = data.name;
        DOMStrings.displayNum.innerText = data.id;
        DOMStrings.displayImageFront.src = data.sprites.front_default;
        DOMStrings.displayImageBack.src = data.sprites.back_default;
        DOMStrings.displayImageShinyFront.src = data.sprites.front_shiny;
        DOMStrings.displayImageShinyBack.src = data.sprites.back_shiny;
        DOMStrings.type.textContent = data.types.map(data => data.type.name);
      };

      displayPkmn(data);
    } catch (err) {
      console.log(err);
    }
  });
}

getPkmn();
