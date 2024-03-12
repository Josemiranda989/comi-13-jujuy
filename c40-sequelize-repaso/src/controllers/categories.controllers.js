module.exports = {
  getList: (req, res) => {
    res.send("Esta ruta funciona");
  },
  getDetail: (req, res) => {
    res.send("Esta ruta funciona y el param es" + req.params.id);
  },
};
