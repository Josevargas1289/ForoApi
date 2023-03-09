const Posts = require("../models/post.model");
const Users = require("../models/user.models")
const Categories = require ("../models/categories.models")
const Answers = require ("../models/answers.models")

class PostsServices{
   static async getALl(){
    try {
        const posts = await Posts.findAll({
          attributes: {exclude:[,'userId', 'categoryId']},
          include:[
            {
              model: Users,
              attributes: ['username'] 
            },
            {
             model: Categories,
             attributes: ['name']
            }
           
          ]
        })
        return posts;
    } catch (error) {
        throw error;
    }
   }
   static async create(newPosts){
    try {
        const posts = await Posts.create(newPosts)
        return posts;
    } catch (error) {
        throw error;
    }
   }
   static async postWithAnswers(postId) {
    try {
      const result = await Posts.findByPk(postId, {
        attributes: { exclude: ["categoryId", "userId"] },
        include: [
          {
            model: Users,
            attributes: ["username"],
          },
          {
            model: Categories,
            attributes: ["name"],
          },
          {
            model: Answers,
            include: {
              model: Users,
              attributes: ["username"],
            },
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }


static async update(data, id){
  try {
    const result = await Posts.update(data, {
      where: {id},
    });
    return result;
    
  } catch (error) {
    throw error;
  }
}


}

module.exports = PostsServices;

