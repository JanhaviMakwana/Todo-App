const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type:Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Todo;