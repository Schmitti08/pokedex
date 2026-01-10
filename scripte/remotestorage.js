const pokemonArray = [];
let offset = 0;
let limit = 10;


async function loadPokemon() {
    const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    showLoader();

    try {
        const listResponse = await fetch(BASE_URL);
        const listData = await listResponse.json();

        for (let i = 0; i < listData.results.length; i++) {
            const response = await fetch(listData.results[i].url);
            const data = await response.json();

            pokemonArray.push(createPokemonObject(data));
        }
        filterPokemon();

    } catch (error) {
        console.error("Fehler beim Laden der Pokémon:", error);
    } finally {
        hideLoader();
    }

}

function createPokemonObject(data) {
    return {
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(t => t.type.name),
        weight: data.weight,
        height: data.height,
        stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat
        }
    };
}




