const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('todo','root' , 'PASSWORD', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;