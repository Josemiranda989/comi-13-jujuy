const endpoint = "https://dolarapi.com/v1/dolares";

const $ = (element) => document.querySelector(element);

window.addEventListener("load", () => {
  fetch(endpoint)
    .then((res) => res.json())
    .then((dolars) => {
      dolars.forEach((dolar) => {
        // console.log(dolar);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <h3>Nombre: ${dolar.nombre}</h3>
        <p>Compra:${dolar.compra}</p>
        <p>Venta:${dolar.venta}</p>
        `;
        $(".container").appendChild(card);
      });
    })
    .catch((e) => console.log(e));

  $(".btn").addEventListener("click", () => {
    localStorage.setItem("theme", "darkmode");

    $("body").classList.toggle("darkMode");
    $(".container").classList.toggle("darkMode");
  });
});
