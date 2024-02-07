const User = require('./User')
const BlogPost = require('./Blog')

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {User, BlogPost}