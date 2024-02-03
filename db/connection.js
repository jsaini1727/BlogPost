const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog_post_db', 'jas', '', {
    host: 'localhost',
    port: 3003,
    dialect: 'mysql',
});

module.exports = sequelize;