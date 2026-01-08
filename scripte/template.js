function pokeCard(pokemon, index) {
  return `
    <div class="pokemon-card ${pokemon.types[0]}" onclick="openBigCard(${index})">
      <h3 class="CapLet">${pokemon.name}</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <p>Typ: ${pokemon.types.join(", ")}</p>
    </div>
    `;
}

function renderDetail() {
  let p = pokemonArray[currentIndex];
  let overlay = document.getElementById("detail-card");
  overlay.className = `detail-card ${p.types[0]}`;
  document.getElementById("detail-content").innerHTML = `
    <h2 class="CapLet">${p.name}</h2>
    <img src="${p.image}">
    <p>Typ: ${p.types.join(", ")}</p>
    <p>HP: ${p.stats.hp}</p>
    <p>Attack: ${p.stats.attack}</p>
    <p>Defense: ${p.stats.defense}</p>
    <p>Speed: ${p.stats.speed}</p>
  `;
}

