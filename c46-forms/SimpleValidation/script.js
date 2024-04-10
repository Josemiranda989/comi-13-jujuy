window.addEventListener("load", () => {
  const $ = (element) => document.querySelector(element);

  const validateLength = (value) => {
    if (value.length > 3) {
      return true;
    }
  };

  const validatePass = (value) => {
    const regexPassword = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    if (regexPassword.test(value)) {
      return true;
    }
  };

  const form = $(".formulario");
  form.addEventListener("submit", (event) => {
    // console.log(event.target.email.value);

    event.preventDefault();

    let errors = [];
    if (!validateLength(event.target.name.value)) {
      errors.push({
        field: "Nombre",
        message: "El campo debe tener más de 3 caracteres",
      });
    }
    if (!validateLength(event.target.email.value)) {
      errors.push({
        field: "Email",
        message: "El email debe tener más de 3 caracteres",
      });
    }
    if (!validateLength(event.target.password.value)) {
      errors.push({
        field: "Contraseña",
        message: "La contraseña debe tener más de 3 caracteres",
      });
    }

    if (!validatePass(event.target.password.value)) {
      errors.push({
        field: "Contraseña",
        message:
          "La contraseña debe contener al menos una mayúscula y un número",
      });
    }

    const errorList = $(".errors");
    // console.log(errorList);
    // console.log(errors);

    if (errors.length > 0) {
      errorList.innerHTML = "";
      errors.forEach((error) => {
        return (errorList.innerHTML += ` <li><small>${error.field}: ${error.message}</small></li>`);
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
