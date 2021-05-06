const { Sequelize, DataTypes } = require('sequelize');

const teacher = new Sequelize('teacher', {
    teacherId:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    teacherName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contact:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

module.exports = teacher;