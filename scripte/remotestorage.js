const pokemonArray = [];
let offset = 0;
let limit = 10;


async function loadPokemon() {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    try {

        const listResponse = await fetch(BASE_URL);
        const listData = await listResponse.json();

        for (let i = 0; i < listData.results.length; i++) {
            const response = await fetch(listData.results[i].url);
            const data = await response.json();

            pokemonArray.push({
                name: data.name,
                image: data.sprites.front_default,
                types: data.types.map(t => t.type.name)
            });
        }

        filterPokemon();

    } catch (error) {
        console.error("Fehler beim Laden der Pokémon:", error);
    }

}





