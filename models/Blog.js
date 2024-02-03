const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');

class BlogPost extends Model { }

BlogPost.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    author:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    createdOn: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'blogPost'
});

module.exports = Blog