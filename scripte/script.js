let currentIndex = 0;

function filterPokemon() {
    let searchValue = document.getElementById("search").value.toLowerCase().trim();
    let container = document.getElementById("pokemon-container");
    let html = "";
    if (searchValue.length >= 3) {
        for (let i = 0; i < pokemonArray.length; i++) {
            let pokemonName = pokemonArray[i].name.toLowerCase();
            if (pokemonName.includes(searchValue)) {
                html += pokeCard(pokemonArray[i], i);
            }
        }
    } else {
        for (let i = 0; i < pokemonArray.length; i++) {
            html += pokeCard(pokemonArray[i], i);
        }
    }
    container.innerHTML = html;
}

function loadMore() {
    offset += limit;
    loadPokemon();
}

function showLoader() {
    document.getElementById("loader-overlay").classList.remove("hidden");
}

function hideLoader() {
    document.getElementById("loader-overlay").classList.add("hidden");
}

function openBigCard(index) {
  currentIndex = index;
  renderDetail();
  document.body.style.overflow = "hidden";
  document.getElementById("detail-overlay").classList.remove("hidden");
}

function closeBigCard() {
  document.body.style.overflow = "";
  document.getElementById("detail-overlay").classList.add("hidden");
}

function initCard() {
    document.getElementById("detail-overlay").addEventListener("click", closeBigCard);
    document.getElementById("detail-card").addEventListener("click", (e) => {
        e.stopPropagation();
    });
}

function nextPokemon() {
    currentIndex = (currentIndex + 1) % pokemonArray.length;
    renderDetail();
}

function prevPokemon() {
    currentIndex = (currentIndex - 1 + pokemonArray.length) % pokemonArray.length;
    renderDetail();
}


