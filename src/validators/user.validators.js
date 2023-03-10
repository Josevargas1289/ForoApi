const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error con el campo username")
    .exists()
    .withMessage("El username debe existir")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),

  check("email", "Error con el correo electronico")
    .exists()
    .withMessage("No se encontro la propiedad email")
    .notEmpty()
    .withMessage("No se encontro un valor para el email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El correo no tiene un formato correcto"),

  check("password", "Error con la contraseña")
    .exists()
    .withMessage("No se encontro la propiedad password")
    .notEmpty()
    .withMessage("la propiedad password no puede estar vacia")
    .isString()
    .withMessage("la propiedad password debe ser string")
    .isLength({ min: 7, max: 10})
    .withMessage("la propiedad password debe tener una longitud entre 7 y 10 caracteres"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const updateUserValidator = 
[
   param("id", "error en el campo id de la url")
  .exists()
  .withMessage("El username debe existir")
  .isIn()
  .withMessage("el valor debe ser un numero entero"),


    check("username", "Error con el campo username")
    .exists()
    .withMessage("El username debe existir")
    .notEmpty()
    .withMessage("El username no debe estar vacio")
    .isString()
    .withMessage("El username debe ser un string")
    .isLength({ min: 6, max: 30 })
    .withMessage("El username debe tener entre 6 y 30 caracteres"),

  check("email", "Error con el correo electronico")
    .exists()
    .withMessage("No se encontro la propiedad email")
    .notEmpty()
    .withMessage("No se encontro un valor para el email")
    .isString()
    .isLength({ min: 7, max: 50 })
    .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
    .isEmail()
    .withMessage("El correo no tiene un formato correcto"),

  check("password", "Error con la contraseña")
    .exists()
    .withMessage("No se encontro la propiedad password")
    .notEmpty()
    .withMessage("la propiedad password no puede estar vacia")
    .isString()
    .withMessage("la propiedad password debe ser string")
    .isLength({ min: 7, max: 10})
    .withMessage("la propiedad password debe tener una longitud entre 7 y 10 caracteres"),

  (req, res, next) => {
    validateResult(req, res, next);
  },
    
    
];

module.exports = {
  createUserValidator,
  updateUserValidator,
};