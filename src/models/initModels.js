const Users = require("./user.models");
const Posts = require("./post.model");
const Answer = require("./answers.models")
const Categorie = require("./categories.models")



const initModels = () => {
  // TODO relacion entre Users y Posts
  // * BelongsTo
  // * hasMany

  Users.hasMany(Posts, { foreignKey: "userId" });
  Posts.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany( Answer, {foreignKey: "userId"});
  Answer.belongsTo(Users, {foreignKey: "userId"});
  
  Posts.hasMany(Answer,{foreignKey: "postId"});
  Answer.belongsTo(Posts,{foreignKey: "postId"})

  Categorie.hasMany(Posts, { foreignKey: "categoryId"});
  Posts.belongsTo(Categorie, { foreignKey: "categoryId"})

  

};

module.exports = initModels;
