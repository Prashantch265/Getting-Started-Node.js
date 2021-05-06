const { Sequelize, DataTypes } = require('sequelize');
const Student = require('./students.model');

const Score = Sequelize.define('score', {
    stdid:{
        type: DataTypes.INTEGER,
        
    },
    stdName:{
        type: DataTypes.STRING,   
    },
    interview:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cmat:{
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    intermediate:{
        type: DataTypes.DECIMAL(3,2),
        allowNull: false
    },
    see:{
        type: DataTypes.DECIMAL(3,2),
        allowNull: false
    },
    totalScore:{
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    }
})

Score.belongsTo(Student);

module.exports = Score;