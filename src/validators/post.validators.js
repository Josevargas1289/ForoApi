const { check } = require("express-validator");
const validateResult = require("../utils/validate")

const createPostValidator = 

[
check("title", "error en el campo title")
    .exists()
    .withMessage("debe existir un contenido")
    .notEmpty()
    .withMessage("el campo no puede estar vacio")
    .isString()
    .withMessage("el contenido debe contener datos de tipo texto"),


check("description", "error en el campo description")
    .exists()
    .withMessage("debe existir un contenido")
    .notEmpty()
    .withMessage("el campo no puede estar vacio")
    .isString()
    .withMessage("el contenido debe contener datos de tipo texto"),

check("userId", "error con le id de userr relacionado en este modelo")
    .exists()
    .withMessage("debe existir el id del usuario")
    .notEmpty()
    .withMessage("el campo con el id del usuario no puede estar vacio")
    .isNumeric()
    .withMessage("el campo debe ser numerico"),

check("categoryId", "error con le id de userr relacionado en este modelo")
    .exists()
    .withMessage("debe existir el id del usuario")
    .notEmpty()
    .withMessage("el campo con el id del usuario no puede estar vacio")
    .isNumeric()
    .withMessage("el campo debe ser numerico"),

    (req, res, next)=>{
        validateResult(req, res, next);
    }

]

const UpdatePostvalidator =
[

   


check("description", "error en el campo description")
    .exists()
    .withMessage("debe existir un contenido")
    .notEmpty()
    .withMessage("el campo no puede estar vacio")
    .isString()
    .withMessage("el contenido debe contener datos de tipo texto"),


    (req, res, next)=>{
        validateResult(req, res, next);
    }

]


module.exports ={

    createPostValidator, 
    UpdatePostvalidator,

}