const ENDPOINT = "https://restcountries.com/v3.1/all";
const LIMIT = 10;

module.exports = {
  getListV1: (req, res) => {
    const page = req.query.page || 1; //Obtenemos el numero de pagina o 1 por defecto
    const offset = (page - 1) * LIMIT; // calculo del indice de inicio en base a la pagina actual
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((countries) => {
        const paginatedDolars = countries.slice(offset, offset + LIMIT); //elementos de la pagina
        const totalPages = Math.ceil(countries.length / LIMIT); //total de paginas
        res.render("home", {
          countries: paginatedDolars,
          currentPage: page,
          totalPages,
        });
      });
  },
  getListV2: async (req, res) => {
    const response = await fetch(ENDPOINT);
    const countries = await response.json();
    res.render("home", { countries });
  },
};
