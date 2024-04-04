window.addEventListener("load", () => {
  //   alert("Se cargó correctamente el dom");
  let titulo = document.querySelector(".titulo");
  let logo = document.querySelector(".logo");
  let navList = document.querySelector(".nav__bottom");

  titulo.addEventListener("click", () => {
    console.log("Hiciste click");
    titulo.style.color = "red";
  });

  logo.addEventListener("mouseover", () => {
    console.log("Ingresaste al logo");
  });

  logo.addEventListener("mouseout", () => {
    console.log("Quitaste el mouse");
  });

  navList.addEventListener("mouseleave", () => {
    console.log("Quitaste el mouse de los elementos");
  });

  navList.addEventListener("mouseout", () => {
    console.log("Quitaste el mouse del elemento padre y de los hijos");
  });
});
