// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// Hi ha un "fotimé" de Pokemons (>1000)... mostra els 200 o 300 primers... it's enough! ;)

window.onload = () => {
  for (let i = 1; i <= 200; i++) {
    // Cada pokemon haurà de ser un <div> diverent; fixa't en la classe que li hem posat per tal
    // que tingui l'aspecte final desitjat.

    const pokemon = document.createElement("div");
    // Cada pokemon haurà de tenir un <span> amb el seu número de pokemon (1.png, 2.png, 3.png, etc.)
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    const newImg = document.createElement("img");
    // Per fer la crida a la imatge, hauràs de modificar l'atribut corresponent de cada imatge.
    //add class list
    pokemon.classList.add("pokemon");
    newImg.src = `${baseURL}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
  }
};
