const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id){
    /* let url = `https://pokeapi.co/api/v2/{endpoint}/` */
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then((data) => {
        createPokemon(data)
    });
}

/* fetchPokemon(1); */

 function fetchPokemons(number){
    for(let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}

/* fetchPokemons(9) */

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p')
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);

}

fetchPokemons(12);

