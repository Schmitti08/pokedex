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
  let card = document.getElementById("detail-card");
  card.className = `detail-card ${p.types[0]}`;
  document.getElementById("detail-content").innerHTML = `
    <h2 class="CapLet">${p.name}</h2>
    <img src="${p.image}"><br>
    <b>Typ:</b> ${p.types.join(", ")}<br>
    <b>Größe:</b> ${p.height / 10} m<br>
    <b>Gewicht:</b> ${p.weight / 10} kg<br>
    <div class="stats">
      ${Object.entries(p.stats).map(([key, val]) => `
        <div class="stat">
          <span>${key.toUpperCase()}</span>
          <div class="bar">
            <div class="bar-fill" style="width:${Math.min(val,100)}%"></div>
          </div>
        </div>
      `).join("")}
    </div>`
}

