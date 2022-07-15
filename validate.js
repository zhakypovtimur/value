function validatePassword(str) {
    if (typeof str !== "string") {
        return [false, "Error in validatePassword"];
    }
    if (str.length < 8) {
        return [false, "Пароль меньше 8 символов"];
    }
    if (str.search(/[a-z]/) === -1) {
        return [false, "Пароль должен содержать хотя бы одну маленькую букву"];
    }
    if (str.search(/[A-Z]/) === -1) {
        return [false, "Пароль должен содержать хотя бы одну большую букву"];
    }
  
    if (str.search(/[0123456789]/) === -1) {
        return [false, "Пароль должен содержать хотя бы одну цифру"];
    }
    if (str.search(/[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/) === -1) {
        return [false, "Пароль должен содержать хотя бы один символ"];
    }
    if (str.search(/\s/) !== -1) {
        return [false, "Пароль должен содержать пробел"];
    }
   

  return [true];
}
