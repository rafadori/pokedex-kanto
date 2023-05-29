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

      if (type.types.length == 1) {
        box.querySelector("#pokemon-type").innerHTML = type.types[0].type.name
        box.querySelector("#pokemon-type-d").innerHTML = ""
        if (type.types[0].type.name === "grass") {
          box.querySelector("#pokemon-type").setAttribute("class", "grass")
        } else if (type.types[0].type.name === "fire") {
          box.querySelector("#pokemon-type").setAttribute("class", "fire")
        } else if (type.types[0].type.name === "water") {
          box.querySelector("#pokemon-type").setAttribute("class", "water")
        } else if (type.types[0].type.name === "poison") {
          box.querySelector("#pokemon-type").setAttribute("class", "poison")
        } else if (type.types[0].type.name === "flying") {
          box.querySelector("#pokemon-type").setAttribute("class", "flying")
        } else if (type.types[0].type.name === "bug") {
          box.querySelector("#pokemon-type").setAttribute("class", "bug")
        } else if (type.types[0].type.name === "normal") {
          box.querySelector("#pokemon-type").setAttribute("class", "normal")
        } else if (type.types[0].type.name === "electric") {
          box.querySelector("#pokemon-type").setAttribute("class", "electric")
        } else if (type.types[0].type.name === "ice") {
          box.querySelector("#pokemon-type").setAttribute("class", "ice")
        } else if (type.types[0].type.name === "fighting") {
          box.querySelector("#pokemon-type").setAttribute("class", "fighting")
        } else if (type.types[0].type.name === "ground") {
          box.querySelector("#pokemon-type").setAttribute("class", "ground")
        } else if (type.types[0].type.name === "psychic") {
          box.querySelector("#pokemon-type").setAttribute("class", "psychic")
        } else if (type.types[0].type.name === "rock") {
          box.querySelector("#pokemon-type").setAttribute("class", "rock")
        } else if (type.types[0].type.name === "ghost") {
          box.querySelector("#pokemon-type").setAttribute("class", "ghost")
        } else if (type.types[0].type.name === "dragon") {
          box.querySelector("#pokemon-type").setAttribute("class", "dragon")
        } else if (type.types[0].type.name === "dark") {
          box.querySelector("#pokemon-type").setAttribute("class", "dark")
        } else if (type.types[0].type.name === "steel") {
          box.querySelector("#pokemon-type").setAttribute("class", "steel")
        } else if (type.types[0].type.name === "fairy") {
          box.querySelector("#pokemon-type").setAttribute("class", "fairy")
        }
      } else {
        box.querySelector("#pokemon-type").innerHTML = type.types[0].type.name
        box.querySelector("#pokemon-type-d").innerHTML = type.types[1].type.name
        if (type.types[1].type.name === "grass") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "grass")
        } else if (type.types[1].type.name === "fire") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "fire")
        } else if (type.types[1].type.name === "water") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "water")
        } else if (type.types[1].type.name === "poison") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "poison")
        } else if (type.types[1].type.name === "flying") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "flying")
        } else if (type.types[1].type.name === "bug") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "bug")
        } else if (type.types[1].type.name === "normal") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "normal")
        } else if (type.types[1].type.name === "electric") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "electric")
        } else if (type.types[1].type.name === "ice") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "ice")
        } else if (type.types[1].type.name === "fighting") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "fighting")
        } else if (type.types[1].type.name === "ground") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "ground")
        } else if (type.types[1].type.name === "psychic") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "psychic")
        } else if (type.types[1].type.name === "rock") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "rock")
        } else if (type.types[1].type.name === "ghost") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "ghost")
        } else if (type.types[1].type.name === "dragon") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "dragon")
        } else if (type.types[1].type.name === "dark") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "dark")
        } else if (type.types[1].type.name === "steel") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "steel")
        } else if (type.types[1].type.name === "fairy") {
          box.querySelector("#pokemon-type-d").setAttribute("class", "fairy")
        }
      }

      if (type.types[0].type.name === "grass") {
        box.querySelector("#pokemon-type").setAttribute("class", "grass")
      } else if (type.types[0].type.name === "fire") {
        box.querySelector("#pokemon-type").setAttribute("class", "fire")
      } else if (type.types[0].type.name === "water") {
        box.querySelector("#pokemon-type").setAttribute("class", "water")
      } else if (type.types[0].type.name === "poison") {
        box.querySelector("#pokemon-type").setAttribute("class", "poison")
      } else if (type.types[0].type.name === "flying") {
        box.querySelector("#pokemon-type").setAttribute("class", "flying")
      } else if (type.types[0].type.name === "bug") {
        box.querySelector("#pokemon-type").setAttribute("class", "bug")
      } else if (type.types[0].type.name === "normal") {
        box.querySelector("#pokemon-type").setAttribute("class", "normal")
      } else if (type.types[0].type.name === "electric") {
        box.querySelector("#pokemon-type").setAttribute("class", "electric")
      } else if (type.types[0].type.name === "ice") {
        box.querySelector("#pokemon-type").setAttribute("class", "ice")
      } else if (type.types[0].type.name === "fighting") {
        box.querySelector("#pokemon-type").setAttribute("class", "fighting")
      } else if (type.types[0].type.name === "ground") {
        box.querySelector("#pokemon-type").setAttribute("class", "ground")
      } else if (type.types[0].type.name === "psychic") {
        box.querySelector("#pokemon-type").setAttribute("class", "psychic")
      } else if (type.types[0].type.name === "rock") {
        box.querySelector("#pokemon-type").setAttribute("class", "rock")
      } else if (type.types[0].type.name === "ghost") {
        box.querySelector("#pokemon-type").setAttribute("class", "ghost")
      } else if (type.types[0].type.name === "dragon") {
        box.querySelector("#pokemon-type").setAttribute("class", "dragon")
      } else if (type.types[0].type.name === "dark") {
        box.querySelector("#pokemon-type").setAttribute("class", "dark")
      } else if (type.types[0].type.name === "steel") {
        box.querySelector("#pokemon-type").setAttribute("class", "steel")
      } else if (type.types[0].type.name === "fairy") {
        box.querySelector("#pokemon-type").setAttribute("class", "fairy")
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
