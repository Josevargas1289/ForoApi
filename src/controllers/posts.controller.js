const PostsServices = require("../services/postsServices");


const getAllPosts = async (req, res, next) =>{
    try {
        const data = await PostsServices.getALl()
        res.json(data)
    } catch (error) {
        next(error)
    }

}

const createPosts = async (req, res)=>{
    try {
        const newPosts = req.body;
        const posts = await PostsServices.create(newPosts);
        res.status(201).json(posts)

    } catch (error) {
        next(error)
    }
 }

 const getPostWithAnswers = async (req, res) => {
    try {
      const { postId } = req.params;
      const postWithAnswers = await PostsServices.postWithAnswers(postId);
      res.json(postWithAnswers);
    } catch (error) {
        next(error)
    }
  };

  const postUpdate = async (req, res)=>{
    try {
        const { id } = req.params;
        const data = req.body;
        await PostsServices.update(data, id) 
        res.status(204).send();
    } catch (error) {
        next(error)
    }
  }

module.exports = {
    getAllPosts,
    createPosts,
    getPostWithAnswers,
    postUpdate,
    
}