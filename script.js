fetch("https://pokeapi.co/api/v2/pokemon?limit=151") // endpoint que irá nos retornar apenas os pokémons de primeira geração
  .then((response) => {
    return response.json()
  })
  .then(async (data) => {
    console.log(data.results)
    const page = document.querySelector("#pokedex-page")
    const box = document.querySelector("#pokemon-box")
    page.innerHTML = ""
    for (let i = 0; i < data.results.length; i++) {
      // inserindo os nomes dos pokemons
      box.querySelector("#pokemon-name").innerHTML = data.results[i].name
      box.querySelector("#pokemon-name").style.textTransform = "capitalize"

      // inserindo os tipos dos pokemons
      const pokemonType = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + data.results[i].name
      )
      const type = await pokemonType.json()

      function setTypeClass(elementId, typeName) {
        const element = box.querySelector(elementId)
        element.innerHTML = typeName
        element.setAttribute("class", typeName)
      }

      if (type.types.length == 1) {
        setTypeClass("#pokemon-type", type.types[0].type.name)
        box.querySelector("#pokemon-type-d").innerHTML = ""
      } else {
        setTypeClass("#pokemon-type", type.types[0].type.name)
        setTypeClass("#pokemon-type-d", type.types[1].type.name)
      }

      box.querySelector("#pokemon-type").style.textTransform = "capitalize"
      box.querySelector("#pokemon-type-d").style.textTransform = "capitalize"

      // inserindo imagem dos pokemons
      const pokemonImage = await fetch(
        "https://pokeapi.co/api/v2/pokemon-form/" + data.results[i].name
      )
      const image = await pokemonImage.json()
      box.querySelector("#pokemon-img").src = image.sprites.front_default
      page.innerHTML += box.outerHTML
    }
  })
