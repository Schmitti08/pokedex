function render() {

}


function filterPokemon() {
    const searchValue = document.getElementById("search").value.toLowerCase().trim();

    const container = document.getElementById("pokemon-container");
    let html = "";

    if (searchValue.length >= 3) {
        for (let i = 0; i < pokemonArray.length; i++) {
            const pokemonName = pokemonArray[i].name.toLowerCase();
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
    document
        .getElementById("loader-overlay")
        .classList.remove("hidden");
}

function hideLoader() {
    document
        .getElementById("loader-overlay")
        .classList.add("hidden");
}


let currentIndex = 0;

function openDetail(index) {
    currentIndex = index;

    if (!document.getElementById("detail-overlay")) {
        document.body.insertAdjacentHTML("beforeend", bigPokeCard());
    }
    document.body.style.overflow = "hidden";
    const overlay = document.getElementById("detail-overlay");
    overlay.classList.remove("hidden");
    renderDetail();
}

function closeDetail(event) {
    document.body.style.overflow = "";
    document.getElementById("detail-overlay").classList.add("hidden");
}

function nextPokemon() {
    currentIndex = (currentIndex + 1) % pokemonArray.length;
    renderDetail();
}

function prevPokemon() {
    currentIndex =
        (currentIndex - 1 + pokemonArray.length) % pokemonArray.length;
    renderDetail();
}

