const DOMStrings = {
  input: document.getElementById("pkmn-form"),
  name: document.getElementById("pokemon-name"),
  displayName: document.querySelector('.pkmon-name-size'),
  displayNumber: document.querySelector('.pkmn-num'),
  displayImageFront: document.querySelector('.display-image-front-def'),
  displayImageBack: document.querySelector('.display-image-back-def'),
  displayImageShinyFront:document.querySelector('.display-image-shiny-front'),
  displayImageShinyBack: document.querySelector('.display-image-shiny-back')
};

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

      const displayPkmn = function(data) {};
    } catch (err) {
      console.log(err);
    }
  });
}

getPkmn();
