const typeColors = {
  grass: "#5cb737",
  poison: "#88447a",
  fire: "#d52100",
  flying: "#556dff",
  water: "#0080ff",
  bug: "#83901a",
  normal: "#797964",
  electric: "#c90",
  ground: "#bf9926",
  fighting: "#a84d3d",
  psychic: "#ff227a",
  rock: "#a59249",
  steel: "#8e8ea4",
  ice: "#0af",
  ghost: "#5454b3",
  dragon: "#4e38e9",
}

async function fetchPokemonData(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  const data = await response.json()
  return {
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((type) => type.type.name),
  }
}

async function fetchAllPokemonData() {
  const promises = []
  Array.from({ length: 151 }, (_, index) => index + 1).forEach((pokemonId) => {
    promises.push(fetchPokemonData(pokemonId))
  })
  return Promise.allSettled(promises)
}

async function displayPokemonData() {
  const pokemonContainer = document.getElementById("pokemonContainer")
  const results = await fetchAllPokemonData()

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      const pokemon = result.value
      const pokemonDiv = document.createElement("div")
      pokemonDiv.classList.add("pokemon")

      // Adiciona a cor correspondente ao tipo do pokemon
      const typesWithColors = pokemon.types.map((type) => {
        const color = typeColors[type]
        return `<span style="color: ${color};">${type}</span>`
      })

      pokemonDiv.innerHTML = `
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <h3>${pokemon.name}</h3>
                <p>${typesWithColors.join(" ")}</p>
            `
      pokemonContainer.appendChild(pokemonDiv)
    } else {
      const errorDiv = document.createElement("div")
      errorDiv.textContent = `Falha ao carregar pokemon`
      pokemonContainer.appendChild(errorDiv)
    }
  })
}

displayPokemonData()
