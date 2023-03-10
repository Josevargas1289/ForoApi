const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createAnswerValidator =

[
    check("content", "error en el campo content")
    .exists()
    .withMessage("debe existir un contenido")
    .notEmpty()
    .withMessage("el campo no puede estar vacio")
    .isString()
    .withMessage("el contenido debe contener datos de tipo texto"),

    check("userId", "error con le id del usuario al que le pertenece el Answer")
    .exists()
    .withMessage("debe existir el id del usuario")
    .notEmpty()
    .withMessage("el campo con el id del usuario no puede estar vacio")
    .isNumeric()
    .withMessage("el campo debe ser numerico"),

    check("postId", "error con le id del post al que le pertenece el Answer")
    .exists()
    .withMessage("debe existir el id del usuario")
    .notEmpty()
    .withMessage("el campo con el id del usuario no puede estar vacio")
    .isNumeric()
    .withMessage("el campo debe ser numerico"),

    (req, res, next)=>{
        validateResult(req, res, next);
    }

];

const updateAnswersValidator =  
[

    check("content", "error en el campo content")
    .exists()
    .withMessage("debe existir un contenido")
    .notEmpty()
    .withMessage("el campo no puede estar vacio")
    .isString()
    .withMessage("el contenido debe contener datos de tipo texto"),

]


module.exports = {
    createAnswerValidator,
    updateAnswersValidator
}