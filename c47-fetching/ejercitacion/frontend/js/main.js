function agregarFavorito(id) {
  let favoritas = localStorage.getItem("peliculasFavoritas");

  if (!favoritas) {
    localStorage.setItem("peliculasFavoritas", id);
  } else {
    let arr = favoritas.split(",");
    arr.push(id);
    localStorage.setItem("peliculasFavoritas", arr);
  }
  Swal.fire({
    title: "Agregado a favoritos!",
    text: `La pelicula con el id ${id} se agregó al listado`,
    icon: "success",
  });
}

window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  if (localStorage.getItem("peliculasFavoritas")) {
    let linkFavoritas = document.createElement("a");
    linkFavoritas.setAttribute(
      "href",
      "http://127.0.0.1:5500/frontend/favoritas.html"
    );
    linkFavoritas.textContent = "Ver Favoritas";
    app.appendChild(linkFavoritas);
  }

  fetch("http://localhost:4000/api/movies")
    .then(function (peliculas) {
      return peliculas.json();
    })
    .then((peliculas) => {
      let data = peliculas.data;

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);

        const favoritas = document.createElement("span");
        favoritas.innerHTML = `<a onclick=agregarFavorito(${movie.id})>⭐</a>`;

        card.appendChild(favoritas);
      });
    });
};
