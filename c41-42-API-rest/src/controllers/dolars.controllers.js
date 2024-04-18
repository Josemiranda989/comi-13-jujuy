const ENDPOINT = "https://restcountries.com/v3.1/all";

module.exports = {
  getList: (req, res) => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((dolars) => {
        res.render("home", { countries });
      });
  },
  getListV2: async (req, res) => {
    const response = await fetch(ENDPOINT);
    const dolars = await response.json();
    res.render("home", { countries });
  },
};
