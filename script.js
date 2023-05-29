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
      page.innerHTML += box.outerHTML
    }
  })