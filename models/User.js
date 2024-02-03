const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/connection');
const { hash, compare} = require('bcrypt');
const Blog = require('./Blog');
const BlogPost = require('./Blog');


class User extends Model {
    toJSON(){
        const user = Object.assign({}, this.get);
        delete user.password;
        return user;
    }
    async validatePass(formPassword){
        const is_valid = await compare(formPassword, this.password);
        return is_valid;
    }
 }

User.init({
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: {
            args: true,
            msg: 'That username already exists'

        }
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique:{
            arg: true,
            msg: 'A user with that email already exists'
        },
        validate: {
            isEmail: {
                args: true,
                msg: 'You must provide a valid email address'
            }
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: 6,
                msg: 'Your password must be atleast 6 characters in length.'
            }
        }
    },
    
}, {
    sequelize,
    modelName: 'user',
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