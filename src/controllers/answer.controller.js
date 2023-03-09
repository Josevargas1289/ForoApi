const AnswerServices = require("../services/answer.services");

const createAnswer = async (req, res) => {
  try {
    // obtener la información de la respuesta
    const newAnswer = req.body;
    const answer = await AnswerServices.create(newAnswer);
    res.status(201).json(answer);
  } catch (error) {
    res.status(400).json(error);
  }
};
const deleteAnswers = async (req, res)=>{
  try {
    const { id } = req.params;
    await AnswerServices.delete(id);
    res.status(204).send();
    
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateAnswers = async (req, res)=>{
  try {
    const { id } = req.params;
    const data = req.body;
    await AnswerServices.update(data, id)
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error)
  }
}



module.exports = {
  createAnswer,
  deleteAnswers,
  updateAnswers,
};