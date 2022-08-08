const pokemonContainer = document.querySelector(".pokemon-container");

function busqueda_pokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            crear_pokemon(data);
        });
}

function busqueda(numero) {
    for (let i = 1; i <= numero; i++) {
        var x = Math.floor(Math.random() * 898)
        busqueda_pokemon(x);
    }
}

function crear_pokemon(pokemon) {
    const flipCard = document.createElement("div");
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    flipCard.appendChild(cardContainer);
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;
    card.appendChild(name);
    card.appendChild(spriteContainer);

    cardContainer.appendChild(card);
    pokemonContainer.appendChild(flipCard);
}

busqueda(6);