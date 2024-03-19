const ENDPOINT = "https://dolarapi.com/v1/dolares";

module.exports = {
  getList: (req, res) => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((dolars) => {
        res.render("home", { dolars });
      });
  },
  getListV2: async (req, res) => {
    const response = await fetch(ENDPOINT);
    const dolars = await response.json();
    res.render("home", { dolars });
  },
  getPokemon: async (req, res) => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const pokemon = await response.json();

    res.render("pokemon", { pokemon });
  },
};
