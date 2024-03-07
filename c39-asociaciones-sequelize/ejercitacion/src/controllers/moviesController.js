const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
  list: (req, res) => {
    db.Movie.findAll({
      include: ["genres", "actores"],
      attributes: {
        exclude: ["genre_id", "created_at", "updated_at"],
      },
    }).then((movies) => {
      // return res.json(movies[1].genres.name);
      res.render("moviesList.ejs", { movies });
    });
  },

  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail.ejs", { movie });
    });
  },
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("newestMovies", { movies });
    });
  },
  recomended: (req, res) => {
    db.Movie.findAll({
      where: {
        rating: { [db.Sequelize.Op.gte]: 8 },
      },
      order: [["rating", "DESC"]],
    }).then((movies) => {
      res.render("recommendedMovies.ejs", { movies });
    });
  },
  //Aqui dispongo las rutas para trabajar con el CRUD
  add: async function (req, res) {
    try {
      let allGenres = await db.Genre.findAll();
      res.render("moviesAdd", { allGenres });
    } catch (error) {
      console.log(error);
    }
  },
  create: async function (req, res) {
    try {
      // console.log("req.body values", req.body);
      await db.Movie.create(req.body);
      // redireccionar a movies
      res.redirect("/movies");
    } catch (error) {
      console.log(error);
    }
  },
  edit: async function (req, res) {
    try {
      let movie = await db.Movie.findByPk(req.params.id);
      let allGenres = await db.Genre.findAll();

      res.render("moviesEdit", { movie, allGenres });
    } catch (error) {
      console.log(error);
    }
  },
  update: function (req, res) {},
  delete: function (req, res) {},
  destroy: function (req, res) {},
};

module.exports = moviesController;
