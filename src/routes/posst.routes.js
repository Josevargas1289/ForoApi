const { Router } = require("express");
const { createPostValidator, UpdatePostvalidator} = require("../validators/post.validators")
const { getAllPosts, createPosts, getPostWithAnswers, postUpdate } = require("../controllers/posts.controller")


const router =  Router();

router.get('/api/v1/posts', getAllPosts);
router.post('/api/v1/posts', createPostValidator, createPosts);
router.get('/api/v1/posts/:postId/Answer', getPostWithAnswers)
router.put('/api/v1/posts/:id',UpdatePostvalidator, postUpdate)



module.exports = router; 