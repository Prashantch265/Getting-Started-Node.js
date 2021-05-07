const {DataTypes} = require('sequelize');
const sequelize = require('./index');

const Student = sequelize.define('student',{
    stdid:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    midname:{
        type: DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname:{
        type: DataTypes.VIRTUAL,
         get(){
            const name = this.firstname + " " + this. lastname;
            return name.toUpperCase();
         }
    },
    dob:{
        type: DataTypes.DATE,
        allowNull: false
    },
    gender:{
        type: DataTypes.ENUM({
            values: ['male', 'femail', 'others']
        }),
        allowNull: false
    },
    contact:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING
    },
    permanent_province:{
        type: DataTypes.ENUM({
            values: ['Province 1', 'Province 2', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim']
        }),
        allowNull: false
    },
    permanent_district:{
        type: DataTypes.STRING,
        allowNull: false
    },
    permanent_municipality:{
        type: DataTypes.STRING,
        allowNull: false
    },
    permanent_wardno:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temporary_province:{
        type: DataTypes.ENUM({
            values: ['Province 1', 'Province 2', 'Bagmati', 'Gandaki', 'Lumbini', 'Karnali', 'Sudurpaschim', '']
        })
    },
    temporary_district:{
        type: DataTypes.STRING
    },
    temporary_municipality:{
        type: DataTypes.STRING
    },
    temporary_wardno:{
        type: DataTypes.INTEGER
    },
    fathersName:{
        type: DataTypes.STRING
    },
    fathersOccupation:{
        type: DataTypes.STRING
    },
    fathersPhone:{
        type: DataTypes.STRING
    },
    mothersName:{
        type: DataTypes.STRING
    },
    mothersOccupation:{
        type: DataTypes.STRING
    },
    mothersPhone:{
        type: DataTypes.STRING
    },
    guardiansName:{
        type: DataTypes.STRING
    },
    guardiansOccupation:{
        type: DataTypes.STRING
    },
    guardiansPhone:{
        type: DataTypes.STRING
    },
    schoolName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    schoolAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    percentageGPA1:{
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    passedYear1:{
        type: DataTypes.STRING,
        allowNull: false
    },
    highschoolName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    highschoolAddress:{
        type: DataTypes.STRING,
        allowNull: false
    },
    percentageGPA2:{
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    stream:{
        type: DataTypes.ENUM({
            values: ['Science', 'Management', 'Humanities']
        }),
        allowNull: false
    },
    passedYear2:{
        type: DataTypes.STRING,
        allowNull: false
    },
    program:{
        type: DataTypes.ENUM({
            values: ['BBA', 'BIM', 'BBA-FI', 'BBM']
        }),
        allowNull: false
    }
},{
    timestamps: true
})

module.exports = Student;