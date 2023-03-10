const AnswerServices = require("../services/answer.services");

const createAnswer = async (req, res, next) => {
  try {
    // obtener la información de la respuesta
    const newAnswer = req.body;
    const answer = await AnswerServices.create(newAnswer);
    res.status(201).json(answer);
  } catch (error) {
    next(error)
  }
};
const deleteAnswers = async (req, res)=>{
  try {
    const { id } = req.params;
    await AnswerServices.delete(id);
    res.status(204).send();
    
  } catch (error) {
    next(error)
  }
}

const updateAnswers = async (req, res)=>{
  try {
    const { id } = req.params;
    const data = req.body;
    await AnswerServices.update(data, id)
    res.status(204).send();
  } catch (error) {
    next(error)
  }
}



module.exports = {
  createAnswer,
  deleteAnswers,
  updateAnswers,
};