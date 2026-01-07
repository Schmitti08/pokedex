function pokeCard(pokemon, index) {
  return `
    <div class="pokemon-card ${pokemon.types[0]}" onclick="openDetail(${index})">
      <h3 class="CapLet">${pokemon.name}</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <p>Typ: ${pokemon.types.join(", ")}</p>
    </div>
    `;
}

function bigPokeCard() {
  return `
    <div id="detail-overlay" class="detail-overlay hidden" onclick="closeDetail(event)">
      <div id="detail-card" class="detail-card" onclick="event.stopPropagation()">
          <button class="nav left" onclick="prevPokemon()">❮</button>
          <button class="nav right" onclick="nextPokemon()">❯</button>
          <div id="detail-content"></div>
      </div>
    </div>
  `;
}

function renderDetail() {
  const p = pokemonArray[currentIndex];
  const overlay = document.getElementById("detail-card");
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

