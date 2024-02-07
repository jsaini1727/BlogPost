const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');

class BlogPost extends Model { }

BlogPost.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true,
    },


}, {
    sequelize,
    modelName: 'blogPost'
});

module.exports = BlogPost