const { DataTypes } = require("sequelize");
const db = require('../utils/database')

const Answer = db.define('answers', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNul: false,
        field: 'user_id',
    },
    postId:{
        type: DataTypes.INTEGER,
        allowNul: false,
        field: 'post_id'

    }
},
{
    timestamps: true,
    updatedAt: false,
  }
);

module.exports = Answer;

