<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemon Info</title>
</head>
<body>
    <div id="pokemon-info">
        <input type="text" id="pokemon-input" placeholder="Enter Pokemon ID or name">
        <button onclick="searchPokemon()">Search</button>
        <div id="error-message" style="color: red;"></div>
    </div>

    <script>
        async function getPokemonInfo(idOrName) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
                if (!response.ok) {
                    throw new Error('Pokemon not found');
                }
                const data = await response.json();
                return {
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    weight: data.weight,
                    abilities: data.abilities,
                    sprites: data.sprites
                };
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
                throw error;
            }
        }

        async function displayPokemonInfo(idOrName) {
            try {
                const pokemon = await getPokemonInfo(idOrName);
                const abilities = pokemon.abilities.map(ability => ability.ability.name).join(', ');

                const pokemonInfoDiv = document.getElementById('pokemon-info');
                pokemonInfoDiv.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <p>ID: ${pokemon.id}</p>
                    <p>Height: ${pokemon.height}</p>
                    <p>Weight: ${pokemon.weight}</p>
                    <p>Abilities: ${abilities}</p>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                `;
            } catch (error) {
                const errorMessage = document.getElementById('error-message');
                errorMessage.textContent = 'Error: Pokemon not found or API issue';
            }
        }

        async function searchPokemon() {
            const pokemonInput = document.getElementById('pokemon-input').value;
            await displayPokemonInfo(pokemonInput);
        }
    </script>
</body>
</html>
