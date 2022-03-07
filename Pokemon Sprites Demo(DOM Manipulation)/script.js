// https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/";
for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const span = document.createElement("span");
  span.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  pokemon.appendChild(newImg);
  pokemon.appendChild(span);
  container.appendChild(pokemon);
}
