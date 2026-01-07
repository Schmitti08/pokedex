function render(){

}


function filterPokemon() {
    const searchValue = document.getElementById("search").value.toLowerCase();

    const container = document.getElementById("pokemon-container");
    let html = "";

    for (let i = 0; i < pokemonArray.length; i++) {
        const pokemonName = pokemonArray[i].name.toLowerCase();

        if (pokemonName.includes(searchValue)) {
            html += pokeCard(pokemonArray[i]);
        }
    }
    container.innerHTML = html;
}

function loadMore() {
    offset += limit; 
    loadPokemon();
}



function showLoader() {
  document
    .getElementById("loader-overlay")
    .classList.remove("hidden");
}

function hideLoader() {
  document
    .getElementById("loader-overlay")
    .classList.add("hidden");
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

