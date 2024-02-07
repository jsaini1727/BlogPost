const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');
const { hash, compare} = require('bcrypt');
const BlogPost = require('./Blog');


class User extends Model {
     validatePass(formPassword){
        const is_valid =  compare(formPassword, this.password);
        return is_valid;
    }
 }

User.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique:{
    //         arg: true,
    //         msg: 'A user with that email already exists'
    //     },
    //     validate: {
    //         isEmail: {
    //             args: true,
    //             msg: 'You must provide a valid email address'
    //         }
    //     }
    // },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    },
    
}, {
    sequelize,
    modelName: 'user',
    underscored: true,
    hooks: {
        async beforeCreate(user){
            user.password = await hash(user.password, 10);
            return user;
        }
    }
});

User.hasMany(BlogPost);
BlogPost.belongsTo(User);

module.exports = User