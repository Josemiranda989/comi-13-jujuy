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
        /* where: {
          nombre: { [Op.like]: "%Pe%" },
        },
        limit: 5, 
        order: [["nombre", "DESC"]],*/
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
  nuevoArtistaForm: (req, res) => {
    res.render("nuevoArtistaForm.ejs");
  },
  nuevoArtistaCreacion: async (req, res) => {
    try {
      await db.Artista.create({
        id: 600, //esto esta mal
        nombre: req.body.nombre,
      });
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  },
  editarArtistaForm: async (req, res) => {
    try {
      const artista = await db.Artista.findByPk(req.params.id);
      res.render("editarArtistaForm.ejs", { artista });
    } catch (error) {
      console.log(error);
    }
  },
  editarArtista: async (req, res) => {
    try {
      await db.Artista.update(
        {
          nombre: req.body.nombre,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
  eliminarArtista: async (req, res) => {
    try {
      await db.Artista.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};
