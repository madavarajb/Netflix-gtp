export const Formvalidation = (email, password, phn, issignin = false) => {
  const validateEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const validatePassword =
    /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "@]).*$/.test(password);
  // const validatePhonenumber = /^\d{10}$/.test(phn);

  if (!validateEmail) return "Email ID invalid";
  if (!validatePassword) return "Password is invalid";
  // if (issignin && !validatePhonenumber) return "Invalid number";
  return null;
};
