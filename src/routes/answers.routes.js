const { Router } = require("express");
const { createAnswer, deleteAnswers, updateAnswers } = require("../controllers/answer.controller");
const {createAnswerValidator} = require("../validators/answers.validators")

const router = Router();

router.post("/api/v1/answers", createAnswerValidator, createAnswer);
router.delete("/api/v1/Answers/:id", deleteAnswers)
router.put("/api/v1/answers/:id", updateAnswers)

module.exports = router;