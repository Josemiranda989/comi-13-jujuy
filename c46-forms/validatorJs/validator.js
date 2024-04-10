// https://github.com/validatorjs/validator.js

window.addEventListener("load", () => {
  const $ = (element) => document.querySelector(element);

  $(".formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = [];

    if (validator.isEmpty($("#name").value)) {
      errors.push({
        field: "Nombre",
        message: "El campo no puede estar vacío",
      });
    }

    if (validator.isEmpty($("#password").value)) {
      errors.push({
        field: "Password",
        message: "El campo no puede estar vacío",
      });
    }

    if (errors.length > 0) {
      let errorMessage = "Se encontraron los siguientes errores:\n";
      errors.forEach((error) => {
        errorMessage += `${error.field}: ${error.message}\n`;
      });
      // Muestra el SweetAlert con los errores
      swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        button: "Entendido",
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "success",
        title: "Iniciaste sesión correctamente",
      });

      setTimeout(() => {
        form.submit();
      }, 2000);
    }
  });
});
