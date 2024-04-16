window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  fetch("http://localhost:4000/api/movies")
    .then((res) => res.json())
    .then(({ data }) => {
      // console.log(data);
      let favoritasStr = localStorage.getItem("peliculasFavoritas");
      if (favoritasStr) {
        let favoritas = favoritasStr.split(",");

        let peliculasFavoritas = data.filter((movie) => {
          return favoritas.includes(movie.id.toString());
        });

        peliculasFavoritas.forEach((movie) => {
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
        });
      } else {
        const noFav = document.createElement("h1");
        noFav.textContent = "No hay peliculas favoritas";
        container.appendChild(noFav);

        const homeBtn = document.createElement("button");
        homeBtn.textContent = "Volver al home";
        homeBtn.addEventListener("click", () => {
          window.location.href = "http://127.0.0.1:5500/frontend/home.html";
        });
        container.appendChild(homeBtn);
      }
    });

  /** Codigo que debemos usar para mostrar los datos en el frontend
  
  */
};
