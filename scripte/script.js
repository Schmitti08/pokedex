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

document.getElementById("load-more").addEventListener("click", () => {
    offset += limit; // Nächste 10
    loadPokemon();
});

