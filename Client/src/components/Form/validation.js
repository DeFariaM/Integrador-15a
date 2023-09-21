const validation = (userData) => {
  let errors = {};

  const combinedRegex =
    /^(?=.{1,35}$)(?=\S+)([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,})$/;

  if (!combinedRegex.test(userData.email)) {
    errors.email = "Invalid email";
  }
  if (!userData.email) {
    errors.email = "Enter your email";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Password must be 6 to 10 characters";
  }

  if (!/\d/.test(userData.password)) {
    errors.password = "Password must contain a number";
  }

  if (!userData.password) {
    errors.password = "Enter a password";
  }

  return errors;
};

/* const combinedRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const passwordRegex = /\d/;

  if (form.email) {
    if (combinedRegex.test(form.email)) {
      setErrors({ ...errors, email: "" });
    } else {
      if (!combinedRegex.test(form.email)) {
        setErrors({ ...errors, email: "Ingrese un email válido" });
      } else if (form.email.length > 35) {
        setErrors({
          ...errors,
          email: "El email no puede tener más de 35 caracteres",
        });
      }
    }
  } else {
    setErrors({ ...errors, email: "Este campo es requerido" });
  }

  if (form.password) {
    if (passwordRegex.test(form.password)) {
      setErrors({ ...errors, password: "" });
    } else {
      if (!passwordRegex.test(form.password)) {
        setErrors({
          ...errors,
          password: "La contraseña debe tener al menos un número",
        });
      } else if (form.password.length < 6 || form.password.length > 10) {
        setErrors({
          ...errors,
          password: "La contraseña debe tener entre 6 y 10 caracteres",
        });
      }
    }
  } else {
    setErrors({ ...errors, password: "Este campo es requerido" });
  } */

export default validation;
