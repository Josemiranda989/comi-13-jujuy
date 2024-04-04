window.addEventListener("load", () => {
  let form = document.querySelector("#formulario-contacto");

  form.addEventListener("submit", (event) => {
    // console.log(form.email.value);
    // console.log(event.target.email.value);
    // let email = document.querySelector("#email");
    // console.log(email.value);

    let errorsString = [];

    if (event.target.email.value.length < 3) {
      errorsString.push("Debes ingresar más de 3 caracteres en el email");
    }

    if (event.target.comentarios.value.length < 3) {
      errorsString.push(
        "Debes ingresar más de 3 caracteres en los comentarios"
      );
    }

    if (errorsString.length > 0) {
      let errorList = document.querySelector("#errores");
      errorList.innerHTML = "";
      errorsString.forEach((error) => {
        errorList.innerHTML += `<li>${error}</li>`;
      });
      // console.log(errorsString);
      event.preventDefault();
    }
  });

  let coment = document.querySelector("#comentarios");
  coment.addEventListener("keypress", (event) => {
    console.log(event.key);
  });

  //   Reconoce caracteres especiales
  window.addEventListener("keydown", (event) => {
    console.log(event.key);
  });
  //   No reconoce caracteres especiales
  window.addEventListener("keypress", (event) => {
    console.log(event.key);
  });
});
