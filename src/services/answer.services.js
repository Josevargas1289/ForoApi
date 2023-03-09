const Answers = require("../models/answers.models");

class AnswerServices {
  static async create(newAnswer) {
    try {
      const result = await Answers.create(newAnswer);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async  delete(id) {
    try {
      const result = await Answers.destroy({
        where: {id}
      })
      return result
    } catch (error) {
      throw error
    }
  }
  static async update(data, id){
    try {
      const result = await Answers.update(data,{
        where: { id }
      });
      return result;
      
    } catch (error) {
      throw error;
    }
  }

}

module.exports = AnswerServices;