function pokeCard(pokemon) {
    return `
    <div class="pokemon-card ${pokemon.types[0]}">
      <h3 class="CapLet">${pokemon.name}</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <p>Typ: ${pokemon.types.join(", ")}</p>
    </div>
    `;
}