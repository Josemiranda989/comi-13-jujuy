window.onload = () => {
  const movieId = 50;
  const $ = (e) => document.querySelector(e);

  fetch("http://localhost:4000/api/movies/" + movieId)
    .then((pelicula) => pelicula.json())
    .then((pelicula) => {
      const title = $("#title");
      const rating = $("#rating");
      const awards = $("#awards");
      const release_date = $("#release_date");
      const length = $("#length");

      console.log(pelicula);

      title.value = pelicula.data.title;
      rating.value = pelicula.data.rating;
      awards.value = pelicula.data.awards;
      release_date.value = pelicula.data.release_date;
      length.value = pelicula.data.length;

      const btnAgregar = $(".botonAgregar");
      const btnBorrar = $(".botonBorrar");
      const btnEditar = $(".botonEditar");

      btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/api/movies/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(pelicula.data),
        })
          .then((res) => res.json())
          .then((res) =>
            console.log("post ok" + res + "\n" + JSON.stringify(pelicula.data))
          );
      });

      btnEditar.addEventListener("click", (e) => {
        e.preventDefault();

        const data = {
          title: title.value,
          rating: rating.value,
          awards: awards.value,
          release_date: release_date.value,
          length: length.value,
        };

        fetch("http://localhost:4000/api/movies/update/" + movieId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json)
          .then((res) => console.log("update ok" + res));
      });

      btnBorrar.addEventListener("click", (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/api/movies/delete/" + 69, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
      });
    });
};
