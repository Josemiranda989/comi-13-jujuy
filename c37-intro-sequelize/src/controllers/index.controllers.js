const db = require("../db/models/index");
const Op = db.Sequelize.Op;

module.exports = {
  /*     artistas: (req, res) => {
        db.Artista.findAll({
            where: {
                nombre:  { [Op.like]: "%Pe%" }
            },
            limit: 5,
            order: [
                ['nombre', 'DESC']
            ]
        })
            .then(artistas =>{
                res.json(artistas);
            })
            .catch(error=>console.log(error.message))
    }, */
  artistas: async (req, res) => {
    try {
      let Artistas = await db.Artista.findAll({
        where: {
          nombre: { [Op.like]: "%Pe%" },
        },
        limit: 5,
        order: [["nombre", "DESC"]],
      });

      res.json(Artistas);
    } catch (error) {
      console.log(error);
    }
  },
  clientes: (req, res) => {
    const numerito = req.params.numerito;

    db.Cliente.findByPk(numerito)
      .then((cliente) => {
        res.json(cliente);
      })
      .catch((error) => console.log(error.message));
  },
  /*   multiPromesa: (req, res) => {
    const promesaClientes = db.Cliente.findAll();
    const promesaArtistas = db.Artista.findAll({
      where: {
        nombre: { [Op.like]: "%Pe%" },
      },
      limit: 5,
      order: [["nombre", "DESC"]],
    });

    Promise.all([promesaClientes, promesaArtistas]).then(
      ([clientes, artistas]) => {
        res.json({
          clientes,
          artistas,
        });
      }
    );
  }, */
  multiPromesa: async (req, res) => {
    try {
      const clientes = await db.Cliente.findAll();
      const artistas = await db.Artista.findAll({
        where: {
          nombre: { [Op.like]: "%Pe%" },
        },
        limit: 5,
        order: [["nombre", "DESC"]],
      });
      const Cliente1 = await db.Cliente.findByPk(1);
      const Artista3 = await db.Artista.findByPk(3);
      //   res.render("listado.ejs", {
      //     clientes,
      //     artistas,
      //     Cliente1,
      //     Artista3,
      //   });
      res.json({
        clientes,
        artistas,
        Cliente1,
        Artista3,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
